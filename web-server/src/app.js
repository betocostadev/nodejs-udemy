/* About the use of express and the routes */
// Single domain
// app.com - root route
// app.com/help - help route
// etc

// req = request | res = response
// app.get('index', () => {}) - What we will serve. Let's say index.html or data.json

const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send(`<h1>Hello Express!</h1>`);
})

app.get('/help', (req, res) => {
  res.send(`<h1>Help page</h1>`);
})

app.get('/about', (req, res) => {
  res.send(`<h1>About page</h1>`);
})

app.get('/weather', (req, res) => {
  res.send(`<h1>Weather page</h1>`);
})

// Start the server
app.listen(3000, () => {
  console.log(`Server is up on port 3000.`)
})


