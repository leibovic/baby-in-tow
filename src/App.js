import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Welcome from "./Welcome";
import Map from "./Map";

render(
  <Router>
    <Welcome default />
    <Map path="map" />
    <Map path="locations/:locationId" />
  </Router>,
  document.getElementById("root")
);
