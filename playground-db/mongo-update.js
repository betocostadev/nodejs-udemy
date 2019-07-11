/* MongoDB Playground | CRUD Operations
Part 3 - UPDATE
Contents:
11 - Variables
15 - Calling MongoDB
23 - Update One by ID
34 - Update One
47 - Update Many

*/
// Below we are destructuring and using ObjectID to be able to get documents by their _id.
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo-playground'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
  if(err) {
    return console.log(`Cannot connect to ${databaseName} DB.`)
  }
  console.log(`Connected to ${databaseName} DB.`)
  const db = client.db(databaseName)

  // Update One by ID
  /* db.collection('users').updateOne({
    _id: new ObjectID('5d271e28798ded10b614282a')
  }, { $set: { name: 'Jesus' }}, (err,result) => {
    if (err) {
      return console.log(err)
    }
    console.log(`Update One by ID:`)
    console.log(result.result)
  }) */

  // Update One
  db.collection('users').updateOne({
    name: 'Truman'
  }, { $set: { age: 2019 }}, (err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.matchedCount === 0) {
      return console.log(`Cannot find the document you want to update!`)
    }
    console.log(`Updated: `)
    console.log(result.result)
  })

  // Update Many
  db.collection('users').updateMany({
    location: 'São Paulo'
  }, { $set: { location: 'Vancouver' }}, (err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.matchedCount === 0) {
      return console.log(`Cannot find the documents you want to update!`)
    }
    console.log(`Update many:`)
    console.log(result.result)
  })

})