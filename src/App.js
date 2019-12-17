import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router, navigate } from "@reach/router";
import FiltersOverlay from "./FiltersOverlay.js";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Marker from './Marker';
import Detail from "./Detail";
import WelcomeOverlay from "./WelcomeOverlay.js";
import logoCircle from "./branding/logo-circle-beta.png";
import { categoryColors } from './constants';

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  // Default to production spreadsheet if no environment variable is set
  spreadsheetId:
    process.env.SPREADSHEET_ID || "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek"
};

// Loaded from synchronous script tag in index.html
const gapi = window.gapi;

const booleanFromYesNo = value => value === 'Y';

const App = ({ locationId }) => {
  const [locations, updateLocations] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 43.675309,
    longitude: -79.323953,
    zoom: 12
  });
  const [category, setCategory] = useState("");
  const [filters, updateFilters] = useState({
    indoor: true,
    outdoor: true,
    changeTable: false,
    stroller1: true,
    stroller2: true,
    stroller3: true,
    nursing1: true,
    nursing2: true,
    nursing3: true
  });
  const [filtersVisible, updateFiltersVisible] = useState(false);
  const [welcomeVisible, updateWelcomeVisible] = useState(!locationId);

  let selectedLocation = locations
    ? locations.find(l => l.id === locationId)
    : null;

  async function requestLocations() {
    try {
      await gapi.client.init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      });

      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: "MVP Data!A2:Q100"
      });

      const responseLocations = response.result.values
        .map(([
          id,
          name,
          description,
          address,
          latitude,
          longitude,
          category,
          nursing,
          stroller,
          changeTable,
          indoor,
          outdoor,
          strollerTips,
          nursingTips,
          website,
          instagram,
          facebook,
        ]) => ({
          id,
          name,
          address,
          category,
          description,
          strollerTips,
          nursingTips,
          website,
          instagram,
          facebook,
          latitude: latitude ? parseFloat(latitude) : 0,
          longitude: longitude ? parseFloat(longitude) : 0,
          nursing:
            nursing && nursing !== "?" ? parseInt(nursing) : 0,
          stroller:
            stroller && stroller !== "?" ? parseInt(stroller) : 0,
          changeTable: booleanFromYesNo(changeTable),
          indoor: booleanFromYesNo(indoor),
          outdoor: booleanFromYesNo(outdoor),
          
        }))
        .filter(l => l.name && l.latitude !== 0 && l.longitude !== 0);

      updateLocations(responseLocations);

      // Set selected location from the route, if it's present
      selectedLocation = responseLocations.find(l => l.id === locationId);
    } catch (e) {
      console.error(e);
    }
  }

  // Called once to load locations state
  useEffect(() => {
    gapi.load("client", requestLocations);
  }, []);

  // Go through filters, looking for a reason to exclude location if it doesn't match requirements
  const displayLocations = locations.filter(location => {
    if (category !== "" && location.category !== category) {
      return false;
    }

    // TODO: account for places that are both indoor and outdoor
    if (!filters.indoor && location.indoor) {
      return false;
    }
    if (!filters.outdoor && location.outdoor) {
      return false;
    }

    // Change table filter is unique in that it means there *must* be a change table,
    // so in this case we look to see if the filter is on to exclude a location
    if (filters.changeTable && !location.changeTable) {
      return false;
    }

    if (!filters.nursing1 && location.nursing === 1) {
      return false;
    }
    if (!filters.nursing2 && location.nursing === 2) {
      return false;
    }
    if (!filters.nursing3 && location.nursing === 3) {
      return false;
    }

    if (!filters.stroller1 && location.stroller === 1) {
      return false;
    }
    if (!filters.stroller2 && location.stroller === 2) {
      return false;
    }
    if (!filters.stroller3 && location.stroller === 3) {
      return false;
    }
    return true;
  });

  if (
    selectedLocation != null &&
    !displayLocations.includes(selectedLocation)
  ) {
    navigate("/");
  }

  return (
    <div id="container">
      <ReactMapGL
        mapboxApiAccessToken={ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        onClick={e => {
          // Hack workaround for click listener firing when pin is clicked
          if (e.target.className === "overlays") {
            navigate("/");
          }
        }}
      >
        { displayLocations.map(location =>  {
          const selected = selectedLocation === location;
          return ( 
            <Marker
              {...location}
              key={`marker-${location.name}`}
              onClick={() => {
                if (selected && location.id) {
                  navigate("/");
                } else {
                  navigate(`/locations/${location.id}`);
                }
              }}
            >
            </Marker>
          )
        })}
      </ReactMapGL>

      <input
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          height: "50px",
          cursor: "pointer"
        }}
        type="image"
        src={logoCircle}
        alt="Baby in Tow"
        onClick={() => updateWelcomeVisible(true)}
      />
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px"
        }}
      >
        <select
          className="categorySelect"
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
          className="filterButton"
          onClick={() => updateFiltersVisible(true)}
        >
          Filter
        </button>
      </div>
      {filtersVisible && (
        <FiltersOverlay
          filters={filters}
          updateFilters={updateFilters}
          onClose={() => updateFiltersVisible(false)}
        />
      )}
      {welcomeVisible && (
        <WelcomeOverlay onClose={() => updateWelcomeVisible(false)} />
      )}
      {selectedLocation && (
        <Detail
          location={selectedLocation}
          categoryColor={categoryColors[selectedLocation.category]}
        />
      )}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 9, // above map but below detail view
          fontSize: "12px",
          padding: "10px",
          backgroundColor: "#374B5B",
          color: "white"
        }}
      >
        Baby in Tow is currently in BETA.{" "}
        <a
          style={{ fontWeight: 600, color: "white" }}
          href="https://forms.gle/X6Tswurfg5VP49Zs7"
          target="_blank"
          rel="noopener noreferrer"
        >
          We&apos;d love your feedback!
        </a>
      </div>
    </div>
  );
};

render(
  <Router>
    <App default />
    <App path="locations/:locationId" />
  </Router>,
  document.getElementById("root")
);
