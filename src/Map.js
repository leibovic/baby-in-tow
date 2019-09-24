import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";
import Detail from "./Detail";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const Map = ({ locations }) => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.66125,
    longitude: -79.33841,
    zoom: 11
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapboxApiAccessToken={ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v10"
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
    >
      {locations.map(location => {
        return (
          <Marker
            key={`marker-${location.name}`}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <Pin onClick={() => setSelectedLocation(location)} />
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
    </ReactMapGL>
  );
};

export default Map;
