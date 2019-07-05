/* About the use of express and the routes */
// Single domain
// app.com - root route
// app.com/help - help route
// etc

// req = request | res = response
// app.get('index', () => {}) - What we will serve. Let's say index.html or data.json

// To access some files, express will need to know the path (absolute)
const path = require('path')
const express = require('express')

// console.log(__filename)
// console.log(path.join(__dirname, '../public'));
const app = express()
const publicDirPath = path.join(__dirname, '../public')

// Set express to work with HBS templating engine
// Must use a views folder with the hbs files
app.set('view engine', 'hbs')
// Customize the server with app.use()
app.use(express.static(publicDirPath))

/* // Not needed any more since we are serving the files, just for show:
app.get('/about', (req, res) => {
  res.send(`<h1>About page</h1>`);
}) */

// Set express to render handlebars file:
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Beto'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Weather App',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Weather App',
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'São Paulo',
    temperature: 25
  });
})

// Start the server
app.listen(3000, () => {
  console.log(`Server is up on port 3000.`)
})


