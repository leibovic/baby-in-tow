import { useState, useEffect } from "react";

const config = {
  apiKey: "AIzaSyAwjO8DjRaUChRw6nx4OarscD6QGlMspqs",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  // Default to production spreadsheet if no environment variable is set
  spreadsheetId:
    process.env.SPREADSHEET_ID || "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek"
};

// Loaded from synchronous script tag in index.html
const gapi = window.gapi;

async function requestLocations() {
  await gapi.client.init({
    apiKey: config.apiKey,
    discoveryDocs: config.discoveryDocs
  });

  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: "MVP Data!A2:Q300"
  });

  const booleanFromYesNo = value => value === "Y";

  const responseLocations = response.result.values
    .map(
      ([
        id,
        name,
        address,
        latitude,
        longitude,
        category,
        nursing,
        stroller,
        changeTable,
        indoor,
        outdoor,
        description,
        strollerTips,
        nursingTips,
        website,
        instagram,
        facebook
      ]) => ({
        id,
        name,
        address,
        category: category ? category.trim() : "",
        description,
        strollerTips,
        nursingTips,
        website,
        instagram,
        facebook,
        latitude: latitude ? parseFloat(latitude) : 0,
        longitude: longitude ? parseFloat(longitude) : 0,
        nursing: nursing && nursing !== "?" ? parseInt(nursing, 10) : 0,
        stroller: stroller && stroller !== "?" ? parseInt(stroller, 10) : 0,
        changeTable: booleanFromYesNo(changeTable),
        indoor: booleanFromYesNo(indoor),
        outdoor: booleanFromYesNo(outdoor)
      })
    )
    .filter(l => l.name && l.latitude !== 0 && l.longitude !== 0);

  return responseLocations;
}

const useGetLocations = () => {
  const [locations, setLocations] = useState([]);

  // Called once to load locations state
  useEffect(() => {
    gapi.load("client", async () => {
      const responseLocations = await requestLocations();
      setLocations(responseLocations);
    });
  }, []);

  return { locations };
};

export default useGetLocations;
