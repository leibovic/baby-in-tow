import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Map from "./Map.js";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek"
};

// Loaded from synchronous script tag in index.html
const gapi = window.gapi;

const App = () => {
  const [locations, updateLocations] = useState([]);

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
          latitude: parseFloat(location[2]),
          longitude: parseFloat(location[3]),
          category: location[4],
          nursing: parseInt(location[5]),
          stroller: parseInt(location[6]),
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

  // let renderPhotos = photoIds =>
  //   photoIds.map(id => (
  //     <img
  //       key={id}
  //       // For full image use https://drive.google.com/uc?id=
  //       src={`https://drive.google.com/thumbnail?id=${id}`}
  //       alt=""
  //     />
  //   ));

  console.log(locations);

  return <Map locations={locations} />;
};

render(<App />, document.getElementById("root"));
