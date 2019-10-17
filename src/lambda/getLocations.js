require("dotenv").config();

const config = {
  apiKey: process.env.GOOGLE_API_KEY,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek",
  range: "MVP Data!A2:O100"
};

module.exports.handler = async (event, context) => {
  console.log(config, event, context);

  const testLocation = {
    name: "My location",
    address: "1234 test st"
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify({ locations: [testLocation] })
  };

  return response;
};
