require("dotenv").config();
const { google } = require("googleapis");

const config = {
  apiKey: process.env.API_KEY,
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek",
  range: "MVP Data!A2:O100"
};

module.exports.handler = async () => {
  const sheets = google.sheets({
    version: "v4",
    auth: config.apiKey
  });

  const sheetsResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: config.range
  });
  const rows = sheetsResponse.data.values;
  const locations = rows.map(location => ({
    name: location[0],
    address: location[1],
    latitude: location[2] ? parseFloat(location[2]) : 0,
    longitude: location[3] ? parseFloat(location[3]) : 0,
    category: location[4],
    nursing: location[5] ? parseInt(location[5]) : 0,
    stroller: location[6] ? parseInt(location[6]) : 0,
    changeTable: location[7] === "Y",
    indoor: location[8] === "Y",
    outdoor: location[9] === "Y",
    description: location[10],
    website: location[11]
  }));

  const response = {
    statusCode: 200,
    body: JSON.stringify({ locations: locations })
  };

  return response;
};
