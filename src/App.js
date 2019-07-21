import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1BDOOmsjy8JePhRqvyGcZi263j42YeRl9jWFW4I-5qWU"
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
        range: "Locations!A2:E5"
      });

      console.log(response.result);

      updateLocations(
        response.result.values.map(location => ({
          name: location[0],
          hasNursingRoom: location[4]
        }))
      );
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    gapi.load("client", requestLocations);
  }, []);

  return (
    <div>
      <h1>Baby Spots</h1>
      <h2>Is there a nursing room?</h2>
      <ul>
        {locations.map(location => (
          <li key={location.name}>
            {location.name}:{" "}
            {location.hasNursingRoom === "TRUE" ? "YUP" : "NOPE"}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

render(<App />, document.getElementById("root"));
