require("dotenv").config();

const config = {
  apiKey: process.env.GOOGLE_API_KEY,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek",
  range: "MVP Data!A2:O100"
};

exports.handler = function(event, context, callback) {
  console.log(config.apiKey);
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
