/* MongoDB Playground | CRUD Operations
Part 2 - READ (and find update, delete, replace)
Contents:
15 - Variables
19 - Calling MongoDB
27 - Find One using Object ID
37 - Find One using other fields
51 - Find Many
69 - Find Many using a certain query (age > and age <)
96 - Find One and Update
109 - Find One and Delete
122 - Find One And Replace


*/
// Below we are destructuring and using ObjectID to be able to get documents by their _id.
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
    console.log(`Find one, using its object ID:`)
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
    console.log(`Find one, using other fields besides the Object ID:`)
    console.log(result)
  })

  // Find many
  db.collection('users').find({
    // Can search for more than one parameter like: name: 'Jesus', god: false
    location: 'Greece', god: true,
  }).toArray((err, result) => {
    if (err) {
      return console.log(err)
      // If it does not find documents, it will return an empty array.
    } else if (result.length === 0) {
      return console.log(`Cannot find documents that match your search query.`)
    }
    console.log(`Find many:`)
    console.log(result)
  })

  // Find many - Using a certain query
  db.collection('users').find({
    age: { $gt: 7000 }
  }).toArray((err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.length === 0) {
      return console.log(`Could not found documents with the query provided.`)
    }
    console.log(`Find the ones with Age greater than 4000:`)
    console.log(result)
  })

  // Find many - Using a certain query
  db.collection('users').find({
    age: { $lt: 60 }
  }).toArray((err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.length === 0) {
      return console.log(`Could not found documents with the query provided.`)
    }
    console.log(`Find the ones with Age less than 60:`)
    console.log(result)
  })

  // Find One and Update
  /* db.collection('users').findOneAndUpdate({
    name: 'Jesus'
  }, { $set: { god: true }}, (err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.value === null) {
      return console.log(`Cannot find what you were looking for:`, err)
    }
    console.log(`Find many one and update:`)
    console.log(`Updated: `, result.value, result.lastErrorObject)
  }) */

  // Find One and Delete
  /* db.collection('users').findOneAndDelete({
    name: 'Jurema'
  }, (err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.value === null) {
      return console.log(`Not found match to find one and delete!`)
    }
    console.log(`Find One and Delete:`)
    console.log(`Deleted: `, result.value, result.lastErrorObject)
  }) */

  // Find One And Replace
  db.collection('users').findOneAndReplace({
    location: 'Argelia'
  }, { //To replace, you have to provide the value for all the fields, otherwise, they will be
    // left empty!
    name: 'Ewerton',
    age: 33,
    location: 'Dublin',
    god: false
  }, (err, result) => {
    if (err) {
      return console.log(err)
    } else if (result.value === null) {
      return console.log(`Cannot find the one to replace!`)
    }
    console.log(`Find One and Replace:`)
    console.log(`Replaced: `, result.value, result.lastErrorObject);
  })

})