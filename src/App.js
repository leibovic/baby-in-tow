import React, { useState } from "react";
import { render } from "react-dom";
import { Router, navigate } from "@reach/router";
import ReactMapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import Marker from "./Marker";
import Detail from "./Detail";
import FiltersOverlay from "./FiltersOverlay";
import WelcomeOverlay from "./WelcomeOverlay";
import { categoryColors } from "./constants";
import useGetLocations from "./hooks/useGetLocations";

import logoCircle from "./branding/logo-circle-beta.png";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const App = ({ locationId }) => {
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

  const { locations } = useGetLocations();
  const selectedLocation = locations
    ? locations.find(l => l.id === locationId)
    : null;

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
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={_viewport => setViewport(_viewport)}
        onClick={e => {
          // Hack workaround for click listener firing when pin is clicked
          if (e.target.className === "overlays") {
            navigate("/");
          }
        }}
      >
        {displayLocations.map(location => {
          const selected = selectedLocation === location;
          const pinColor = location.category
            ? categoryColors[location.category].backgroundColor
            : "white";

          return (
            <Marker
              latitude={location.latitude}
              longitude={location.longitude}
              key={`marker-${location.name}`}
              selected={selected}
              pinColor={pinColor}
              onMarkerClick={() => {
                if (selected && location.id) {
                  navigate("/");
                } else {
                  navigate(`/locations/${location.id}`);
                }
              }}
            />
          );
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
          type="button"
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
