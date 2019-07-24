import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Map from "./Map.js";
import "mapbox-gl/dist/mapbox-gl.css";

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
        range: "Nursing!A3:H10"
      });

      updateLocations(
        response.result.values.map(location => ({
          businessName: location[0],
          location: location[1],
          address: location[2],
          photoIds: location[4].split(",").filter(id => id.length > 0)
        }))
      );
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    gapi.load("client", requestLocations);
  }, []);

  let renderPhotos = photoIds =>
    photoIds.map(id => (
      <img
        key={id}
        // For full image use https://drive.google.com/uc?id=
        src={`https://drive.google.com/thumbnail?id=${id}`}
        alt=""
      />
    ));

  return (
    <div>
      <h1>Baby Spots</h1>
      {locations.map(({ businessName, address, photoIds }) => (
        <div key={businessName}>
          <h2>{businessName}</h2>
          <h3>{address}</h3>
          {renderPhotos(photoIds)}
        </div>
      ))}
      <Map />
    </div>
  );
};

render(<App />, document.getElementById("root"));
