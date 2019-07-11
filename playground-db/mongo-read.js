/* MongoDB Playground | CRUD Operations
Part 2 - Read */
// Below we are destructuring and using ObjectID to be able to get objects by their _id.
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo-playground'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log(err, `Could not connect to ${databaseName}`)
  }
  console.log(`Connected to ${databaseName} DB.`)
  const db = client.db(databaseName)

  // READ OPERATIONS
  // Find One using Object ID
  db.collection('users').findOne({
    _id : new ObjectID("5d271e28798ded10b614282a")
  }, (err, result) => {
    if (err) {
      return console.log(err, 'Not found!')
    }
    console.log(result)
  })

  // Find One using other fields
  db.collection('users').findOne({
    name: 'Ares'
  }, (err, result) => {
    if (err) {
      return console.log(err)
    }
    // If it does not find a document that matches the search, it returns null
    if (result === null) {
      return console.log(`Cannot find the document that matches your search.`)
    }
    console.log(result)
  })

  // Find many
  db.collection('users').find({
    // Can search for more than one parameter like: name: 'Jesus', god: false
    god: false,
  }).toArray((err, result) => {
    if (err) {
      return console.log(err)
      // If it does not find documents, it will return an empty array.
    } else if (result.length === 0) {
      return console.log(`Cannot find documents that match your search query.`)
    }
    console.log(result)
  })

})