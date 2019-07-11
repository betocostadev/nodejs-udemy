/* MongoDB Playground | CRUD Operations
Part 4 - DELETE
Contents:
11 - Variables
15 - Calling MongoDB
22 - Delete One by ID
35 - Delete One
48 - Delete Many

*/
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo-playground'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log(`Cannot connect to ${databaseName} DB.`)
  }
  console.log(`Connected to ${databaseName} DB.`)
  const db = client.db(databaseName)

  // Delete One by ID
  /* db.collection('users').deleteOne({
    _id: new ObjectID('5d278862ef58ef2d2ad6c365')
  }).then((result) => {
    if (result.result.n === 0) {
      console.log(`Cannot find the document based on the provided ID`)
    } else {
      console.log(result.result)
    }
  }).catch((err) => {
    console.log(err)
  }) */

  // Delete One
  db.collection('users').deleteOne({
    name: 'Katrina'
  }).then((result) => {
    if (result.deletedCount === 0) {
      console.log(`Can't find the document to delete!`)
    } else {
      console.log(`Documents deleted: `, result.deletedCount)
    }
  }).catch((err) => {
    console.log(err)
  })

  // Delete Many
  db.collection('users').deleteMany({
    age: { $lt: 21 }
  }).then((result) => {
    if (result.deletedCount === 0) {
      console.log(`Can't find the documents using the provided query!`)
    } else {
      console.log(`Found ${result.result.n} documents. Deleted ${result.deletedCount} documents`)
    }
  }).catch((err) => {
    console.log(err)
  })
})