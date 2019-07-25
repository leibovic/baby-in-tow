import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin.js";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const Map = ({ locations }) => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 10
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v10"
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
    >
      {locations.map(({ latitude, longitude }) => {
        console.log(`${latitude}-${longitude}`);
        <Marker
          key={`${latitude}-${longitude}`}
          latitude={latitude}
          longitude={longitude}
        >
          <Pin size={20}></Pin>
        </Marker>;
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
    </ReactMapGL>
  );
};

export default Map;
