// Darksky API

// request for node.js
const request = require('request');

// Base url request... api/forecast/key/lat,long
// const url = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-23.474,-46.643';
// options as query strings: ?key=value
const darkskyAPI = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/';
const options = ['units=auto', 'units=si', 'lang=en', 'lang=pt'];


/* Some options of the request module:
json: true - parse data into json
 */

const forecast = (latitude, longitude, callback) => {
  const url = `${darkskyAPI}${latitude},${longitude}?${options[1]}&${options[3]}`

  request({url: url, json: true}, (error, response)=> {
    if (error) {
      callback(`Unable to connect to weather service!`, undefined);
    } else if (response.body.error) {
      callback(`Error code: ${response.body.code}. ${response.body.error}`, undefined);
    } else {
      callback(undefined, `${response.body.daily.data[0].summary} Temperatura: ${response.body.currently.temperature}°C, Precipitação: ${response.body.currently.precipProbability}%.
Velocidade do Vento: ${response.body.currently.windSpeed} M/s (${ Math.floor(response.body.currently.windSpeed * 3.6)} K/h). Visibilidade: ${response.body.currently.visibility} M`);
    }
  })
}

// forecast(-23.474,-46.643, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// })

module.exports = forecast;