import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWxlaWJvdmljIiwiYSI6ImNqeWhhdDd2bDA5d2IzZ211NTdsZmNuNDkifQ.EeYaupgKuUPtyZpplZVf6A";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 11
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={ACCESS_TOKEN}
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
    />
  );
};

export default Map;
