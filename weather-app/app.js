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

geocode('São Paulo', (error, data) => {
  console.log('Error ', error)
  console.log('Data ', data);
})

forecast(-23.474,-46.643, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
})