const path = require('path') // Core node module for file paths
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app) // Reqng http and creating the serv. to pass to socketio
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

// app.get('/', (req, res) => res.send('Hello!')) // Test the server
app.use('/', express.static(publicDirectoryPath))

// Counter
let count = 0
// Use socket.io methods
io.on('connection', (socket) => {
  console.log('New WebSocket connection')

})

// Log that node server is running as expected
server.listen(port, () => console.log(`Test app listening on port ${port}!`))