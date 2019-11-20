# Baby Spots

[![Netlify Status](https://api.netlify.com/api/v1/badges/b938825c-9377-4853-93bc-6db7c14ee097/deploy-status)](https://app.netlify.com/sites/babyintow/deploys)

A simple React app for visualizing baby-friendly spots in Toronto.

## Geocoding Addresses

To update the source data spreadsheet with latitude/longitude, run `npm run geocode`. The script will prompt you to authenticate with the Baby in Tow application in order to write to the sheet.

For this to work, you must have a `credentials.json` file in your root directory, which you can download from the OAuth client credentials in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials). You must also have a valid `.env` file in your root directory, with `GEO_API_KEY` set to an API key valid for the Google Geocoding API. 
