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

// server (emit) -> client (receive) = countUpdated
// client (emit) -> server (receive) = increment

// (socket) is an object with some methods
// We will be working with the the public/js/chat.js file
io.on('connection', (socket) => {
  console.log('New WebSocket connection')

  socket.emit('countUpdated', count) // send to client

  // Receiving the increment event from the client
  socket.on('increment', () => {
    count++
    // socket.emit('countUpdated', count) // send back the updated count to the client
    // Using the code below instead of the above... why?
    // With socket.emit the count is updated for a single user, but it doesn't reflect to the others. This way it will work (try different browsers at the same time to check)
    io.emit('countUpdated', count)
  })
})

// Log that node server is running as expected
server.listen(port, () => console.log(`Test app listening on port ${port}!`))