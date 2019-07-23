import React, { useState, useEffect } from "react";
import { render } from "react-dom";

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

      console.log(response.result);

      updateLocations(
        response.result.values.map(location => ({
          businessName: location[0],
          location: location[1],
          address: location[2],
          photoReference: location[3]
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
      <ul>
        {locations.map(({ businessName, location, address }) => (
          <li key={businessName}>
            {businessName}: {location} ({address})
          </li>
        ))}
      </ul>
    </div>
  );
};

render(<App />, document.getElementById("root"));
