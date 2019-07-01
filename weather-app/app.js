/* Weather APP - Node Course (Udemy)
We will use the darksy Api: https://darksky.net/dev
We will also use a Geolocation API to get the user address and convert it to lat/long

Geolocation -> userAddress -> Lat/long -> Darksky weather
*/

// request for node.js
const request = require('request');

// Mapbox API
const mapboxAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const mapboxKey = 'access_token=pk.eyJ1Ijoicm9iZXJ0b2Nvc3RhIiwiYSI6ImNqeGtoendvNzAwYWkzb21vdDBlejhocjYifQ.F9S_9yxCMIatlHCeqqWDfQ';
const mapboxLocation = 'Sao%20Paulo.json?'
const mapboxLimit = '&limit=1';
const mapboxUrl = `${mapboxAPI}${mapboxLocation}${mapboxKey}${mapboxLimit}`;

// Mapbox Request
request({ url: mapboxUrl, json: true}, (error, response) => {
  if (error) {
    console.log(`Unable to connect to geolocation service!`);
  } else if (response.body.message) {
    console.log(`Error: ${response.body.message}`);
  } else if (response.body.features.length === 0) {
    console.log(`Unable to found location: ${response.body.query[0]}`);
  } else {
    // console.log(response.body);
    const placeName = response.body.features[0]['place_name'];
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0]
    console.log(`Location: ${placeName}. Lat: ${latitude}. Long: ${longitude}`);
  }
})


// Darksky API
// Base url request... api/forecast/key/lat,long
// const url = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-23.474,-46.643';
// options as query strings: ?key=value
const darkskyUrl = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-23.474,-46.643';
const options = '?units=si'
const darksky = darkskyUrl + options;

/* Some options of the request module:
json - parse data into json
 */
request({ url: darksky, json: true }, (error, response) => {
  if (error) {
    console.log(`Unable to connect to weather service!`);
  } else if (response.body.error) {
    console.log(`Error code: ${response.body.code}. ${response.body.error}`);
  } else {
    const data = response.body;
    const currentTemp = data.currently.temperature;
    const rainChance = data.currently.precipProbability;
    const summary = data.daily.data[0].summary;
    console.log(`Current temperature is ${currentTemp} and the chance of rain is ${rainChance}%`);
    console.log(summary);
  }
});


