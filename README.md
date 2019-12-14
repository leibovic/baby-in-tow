# Baby in Tow

[![Netlify Status](https://api.netlify.com/api/v1/badges/b938825c-9377-4853-93bc-6db7c14ee097/deploy-status)](https://app.netlify.com/sites/babyintow/deploys)

A simple React app for visualizing baby-friendly spots in Toronto.

## Contributing

To run the app locally, simply run `nmp install` and `npm run dev`.

## Build Environments

By default, all build environments point to our [production spreadsheet](https://docs.google.com/spreadsheets/d/1GxL136Eh5fK_6cTZQ1cW2Dmnq8Pn6hlFyWg9z7mgKek/edit#gid=1116228380).

Netlify is configured to deploy a new preview environment for each PR, and we use those to validate code changes before merging.

However, the `staging` branch is configured to point to our [staging spreadsheet](https://docs.google.com/spreadsheets/d/1FQJHr9FR8Qgprzh8ggxQs4_InP4bZIJhEwDgAlbcOAQ/edit#gid=1116228380). This environment is used for validating new data. We will continually rebase this branch on master, but otherwise no development will happen on it.

## Geocoding Addresses

To update the source data spreadsheet with latitude/longitude, run `npm run geocode`. The script will prompt you to authenticate with the Baby in Tow application in order to write to the sheet.

For this to work, you must have a `credentials.json` file in your root directory, which you can download from the OAuth client credentials in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials). You must also have a valid `.env` file in your root directory, with `GEO_API_KEY` set to an API key valid for the Google Geocoding API. 
