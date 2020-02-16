require("dotenv").config();
const { google } = require("googleapis");

module.exports.handler = async event => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Workaround to have a single line environment variable in Netlify
  const key = process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/_/g, "\n");

  const jwtClient = new google.auth.JWT(
    process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
    null,
    key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  await jwtClient.authorize().catch(e => console.error(e));

  const sheets = google.sheets({
    version: "v4",
    auth: jwtClient,
  });

  const params = JSON.parse(event.body);
  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: "1EdnXNPE2CwvIorGFOlB8xvNs8KDEs_FcgFgy7Xm7V9U",
    range: "Submitted Tips!A1:C100",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[params.name, params.tip]],
    },
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };

  return response;
};
