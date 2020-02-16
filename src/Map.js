import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { navigate } from "@reach/router";

import { categoryColors } from "./constants";
import Marker from "./Marker";

import "mapbox-gl/dist/mapbox-gl.css";
import useGetLocations from "./hooks/useGetLocations";
import Detail from "./Detail";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

function Map({ filters, category, locationId }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 43.675309,
    longitude: -79.323953,
    zoom: 12,
  });

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
    <>
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
      {selectedLocation && (
        <Detail
          location={selectedLocation}
          categoryColor={categoryColors[selectedLocation.category]}
        />
      )}
    </>
  );
}

export default Map;
