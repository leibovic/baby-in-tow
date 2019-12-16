require("dotenv").config();
const { google } = require("googleapis");

module.exports.handler = async (event, context) => {
  console.log(event);

  // Workaround to have a single line environment variable in Netlify
  const key = process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/_/g, "\n");

  const jwtClient = new google.auth.JWT(
    process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
    null,
    key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const result = await jwtClient.authorize().catch(e => console.error(e));
  console.log(result);

  const sheets = google.sheets({
    version: "v4",
    auth: jwtClient
  });

  const sheetsResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: "1EdnXNPE2CwvIorGFOlB8xvNs8KDEs_FcgFgy7Xm7V9U",
    range: "Submitted Tips!A1:C100"
  });
  // console.log(sheetsResponse.data.values);

  const response = {
    statusCode: 200,
    body: JSON.stringify(sheetsResponse.data.values)
  };

  return response;
};
