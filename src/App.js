import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import { render } from "react-dom";
import Map from "./Map.js";
import Filters from "./Filters.js";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek"
};

// Loaded from synchronous script tag in index.html
const gapi = window.gapi;

const App = () => {
  const [locations, updateLocations] = useState([]);
  const [category, setCategory] = useState("");
  const [filters, updateFilters] = useState({
    indoor: null,
    outdoor: null,
    nursing: "",
    stroller: "",
    changeTable: null
  });

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
    if (category === "") {
      return true;
    }
    return location.category === category;
  });

  const Home = () => (
    <div>
      <div
        style={{
          height: "30px",
          padding: "10px"
        }}
      >
        <select
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
        <button onClick={() => navigate("filters")}>More Filters</button>
      </div>
      <Map locations={displayLocations} />
    </div>
  );

  return (
    <Router>
      <Home path="/" />
      <Filters
        path="/filters"
        filters={filters}
        updateFilters={updateFilters}
      />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
