/* MongoDB Playground | CRUD Operations
Part 1 - Create */

const { MongoClient, ObjectID } = require('mongodb')
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongo-playground'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, client) => {
  if(err) {
    return console.log(`Cannot connect to ${databaseName} DB.`)
  }
  console.log(`Connected to ${databaseName} DB.`)
  const db = client.db(databaseName)

  // INSERT ONE
  const addUser = (name, age, location, god) => {
    db.collection('users').insertOne({
      name,
      age,
      location,
      god
    }, (err, result) => {
      if(err) {
        return console.log(`Could not add a new user`)
      }
      console.log(result.ops)
    })
  }

  addUser('Zeus', 6000, 'Greece', true);
  addUser('Hera', 5400, 'Greece', true);

  // INSERT MANY
  // db.collection('users').insertMany([
  //   { name: 'Odin', age: 5000, location: 'Asgard', god: true},
  //   { name: 'Jesus', age: 2019, location: 'Jerusalem', god: false},
  //   { name: 'Ra', age: 4719, location: 'Egypt', god: true}
  // ], (err, result) => {
  //   if (err) {
  //     return console.log(`Error, could not add many.`)
  //   }
  //   console.log(result.ops)
  // })

})

