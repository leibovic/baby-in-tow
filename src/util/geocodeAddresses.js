require("dotenv").config();
const fs = require("fs");
const { promisify } = require("util");
const readline = require("readline");
const { google } = require("googleapis");
const NodeGeocoder = require("node-geocoder");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

readline.Interface.prototype.question[promisify.custom] = function custom(
  prompt
) {
  return new Promise(resolve =>
    readline.Interface.prototype.question.call(this, prompt, resolve)
  );
};
readline.Interface.prototype.questionAsync = promisify(
  readline.Interface.prototype.question
);

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// The file tokens.json stores the user"s access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKENS_PATH = "tokens.json";

const geocoder = NodeGeocoder({
  provider: "google",
  apiKey: process.env.GEO_API_KEY,
});

const getAuth = async () => {
  const credentials = await readFile("credentials.json");
  // eslint-disable-next-line camelcase
  const { client_id, client_secret, redirect_uris } = JSON.parse(
    credentials
  ).installed;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  try {
    const tokensFileContent = await readFile(TOKENS_PATH);
    oAuth2Client.setCredentials(JSON.parse(tokensFileContent));
  } catch (e) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const code = await rl.questionAsync("Enter the code from that page here: ");
    rl.close();

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    await writeFile(TOKENS_PATH, JSON.stringify(tokens));
  }

  return oAuth2Client;
};

const geocodeRow = async row => {
  const updatedRow = [...row];
  const address = row[2];
  const lat = row[3];

  // To save on API calls, only geocode addresses without lay/long
  if (address && !lat) {
    console.log(`geocoding address: ${address}`);

    const result = await geocoder.geocode(address);
    updatedRow[3] = result[0].latitude;
    updatedRow[4] = result[0].longitude;
  }

  return updatedRow;
};

const updateData = async () => {
  const auth = await getAuth();
  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const spreadsheetId = "1FQJHr9FR8Qgprzh8ggxQs4_InP4bZIJhEwDgAlbcOAQ";
  const range = "MVP Data!A2:T300";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  const rows = response.data.values;
  const updatedRows = await Promise.all(rows.map(row => geocodeRow(row)));

  const result = await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values: updatedRows,
    },
  });
  console.log("%d rows updated.", result.data.updatedRows);
};

updateData().catch(e => console.error(e));
