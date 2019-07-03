/* Using raw HTTP requests with Node, no libraries.
The first problem is that Node uses 2 different http requests:
- HTTP
- HTTPS
Using a module like request, it already checks this for us. */

// Node https
const https = require('https');

// Request for the darksky API
const url = 'https://api.darksky.net/forecast/10bdc83894a177fc915d0fb35c56464f/-46.6334,-23.5507?units=si&lang=pt';

const request = https.request(url, (response) => {
  let data = ''
  // We can get data chunks from the request
  response.on('data', (chunk) => {
    // We will get the buffer, convert it to a string
    data = data + chunk.toString()
  })
  // To know when we are done... wait for the 'end' event
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('Error: ', error)
})

request.end()
