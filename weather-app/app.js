/* Weather APP - Node Course (Udemy)
We will use the darksy Api: https://darksky.net/dev
Function for it created: utils/forecast.js

We will also use a Geolocation API to get the user address and convert it to lat/long
Function for it created: utils/geocode.js

Geolocation -> userAddress -> Lat/long -> Darksky weather
*/

// request for node.js
const request = require('request');
// request code for APIs
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log(`Please, provide a location to search.
  Ex: node app.js "Somewhere"`);
} else {
  geocode(address, (error, data) => {
    if (error) {
      console.log(error);
    }
    // console.log('Error ', error)
    // console.log('Data ', data);
    // Get data latitude and longitude from geocode.
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    })
  })
}