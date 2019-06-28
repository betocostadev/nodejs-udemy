/* Weather APP - Node Course (Udemy)
We will use the darksy Api: https://darksky.net/dev */

// request for node.js
const request = require('request');

// Base url request... api/forecast/key/lat,long
// const url = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-23.474,-46.643';
// options as query strings: ?key=value
const url = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-23.474,-46.643';
const units = '?units=si'

const fullUrl = url + units;

/* Some options of the request module:
json - parse data into json
 */
request({ url: fullUrl, json: true }, (error, response) => {
  const data = response.body;
  const currentTemp = data.currently.temperature;
  const rainChance = data.currently.precipProbability;
  const summary = data.daily.data[0].summary;
  console.log(`Current temperature is ${currentTemp} and the chance of rain is ${rainChance}%`);
  console.log(summary);
});


