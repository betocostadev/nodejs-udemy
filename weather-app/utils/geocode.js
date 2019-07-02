/* Geocode
Mapbox API */

// request for node.js
const request = require('request');

// Mapbox API
const mapboxAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const mapboxKey = 'access_token=pk.eyJ1Ijoicm9iZXJ0b2Nvc3RhIiwiYSI6ImNqeGtoendvNzAwYWkzb21vdDBlejhocjYifQ.F9S_9yxCMIatlHCeqqWDfQ';
const mapboxLimit = '&limit=1';

const geocode = (address, callback) => {
  const url = `${mapboxAPI}${encodeURIComponent(address)}.json?${mapboxKey}${mapboxLimit}`;

  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Unable to connect to geolocation service!`, undefined);
    } else if (response.body.message) {
      callback(`Error: ${response.body.message}`, undefined);
    } else if (response.body.features.length === 0) {
      callback(`Unable to find location: ${response.body.query[0]}. Try again.`, undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0]['place_name']
      });
    }
  })
}

// geocode('Philadelphia', (error, data) => {
//   console.log('Error ', error)
//   console.log('Data ', data);
// })

module.exports = geocode;