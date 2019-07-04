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
// Customize the server with app.use()
app.use(express.static(publicDirPath));

/* // Not needed any more since we are serving the files, just for show:
app.get('/about', (req, res) => {
  res.send(`<h1>About page</h1>`);
}) */

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


