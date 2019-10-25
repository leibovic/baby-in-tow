import React, { useState } from "react";
import { render } from "react-dom";
import FiltersOverlay from "./FiltersOverlay.js";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";
import Detail from "./Detail";
import filterIcon from "./icons/filter.png";
import WelcomeOverlay from "./WelcomeOverlay.js";
import { useGetLocations } from "./customHooks";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
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
  const [welcomeVisible, updateWelcomeVisible] = useState(
    // localStorage only stores strings
    localStorage.getItem("welcomeShown") !== "true"
  );

  const { locations } = useGetLocations();

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

  if (
    selectedLocation != null &&
    !displayLocations.includes(selectedLocation)
  ) {
    setSelectedLocation(null);
  }

  return (
    <div id="container">
      <ReactMapGL
        mapboxApiAccessToken={ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        onClick={() => setSelectedLocation(null)}
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
      {welcomeVisible && (
        <WelcomeOverlay onClose={() => updateWelcomeVisible(false)} />
      )}
      <Detail location={selectedLocation} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
