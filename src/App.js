import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import FiltersOverlay from "./FiltersOverlay.js";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";
import Detail from "./Detail";
import filterIcon from "./filter.png";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek"
};

// Loaded from synchronous script tag in index.html
const gapi = window.gapi;

const App = () => {
  const [locations, updateLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.66125,
    longitude: -79.33841,
    zoom: 11
  });
  const [category, setCategory] = useState("");
  const [filters, updateFilters] = useState({
    indoor: false,
    outdoor: false,
    nursing: "",
    stroller: "",
    changeTable: false
  });
  const [filtersVisible, updateFiltersVisible] = useState(false);

  async function requestLocations() {
    try {
      await gapi.client.init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      });

      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: "MVP Data!A2:K20"
      });

      updateLocations(
        response.result.values.map(location => ({
          name: location[0],
          address: location[1],
          latitude: location[2] ? parseFloat(location[2]) : 0,
          longitude: location[3] ? parseFloat(location[3]) : 0,
          category: location[4],
          nursing: location[5] ? parseInt(location[5]) : 0,
          stroller: location[6] ? parseInt(location[6]) : 0,
          changeTable: location[7] === "Y",
          indoor: location[8] === "Y",
          outdoor: location[9] === "Y"
        }))
      );
    } catch (e) {
      console.error(e);
    }
  }

  // Called once to load locations state
  useEffect(() => {
    gapi.load("client", requestLocations);
  }, []);

  const displayLocations = locations.filter(location => {
    if (category !== "" && location.category !== category) {
      return false;
    }
    if (filters.indoor && !location.indoor) {
      return false;
    }
    if (filters.outdoor && !location.outdoor) {
      return false;
    }
    if (filters.changeTable && !location.changeTable) {
      return false;
    }
    if (filters.nursing !== "" && filters.nursing > location.nursing) {
      return false;
    }
    if (filters.stroller !== "" && filters.stroller > location.stroller) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
      >
        {displayLocations.map(location => {
          return (
            <Marker
              key={`marker-${location.name}`}
              latitude={location.latitude}
              longitude={location.longitude}
            >
              <Pin
                onClick={() => setSelectedLocation(location)}
                selected={selectedLocation == location}
              />
            </Marker>
          );
        })}

        <Detail location={selectedLocation} />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            padding: "10px"
          }}
        >
          <NavigationControl />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px"
          }}
        >
          <select
            style={{
              margin: "0 5px"
            }}
            value={category}
            onChange={e => setCategory(e.target.value)}
            onBlur={e => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Eats">Eats</option>
            <option value="Culture">Culture</option>
            <option value="Community">Community</option>
            <option value="Self Care">Self Care</option>
          </select>
          <button
            className="controlButton"
            style={{
              borderLeft: "1px solid #ddd"
            }}
            onClick={() => updateFiltersVisible(true)}
          >
            <img src={filterIcon} alt="Filter"></img>
          </button>
        </div>
      </ReactMapGL>
      {filtersVisible && (
        <FiltersOverlay
          filters={filters}
          updateFilters={updateFilters}
          onClose={() => updateFiltersVisible(false)}
        />
      )}
    </div>
  );
};

render(<App />, document.getElementById("root"));
