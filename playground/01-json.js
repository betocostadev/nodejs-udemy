// JSON experiment
// Use FS from node to write files
const fs = require('fs');
const book = {
  title: 'Lord of The Rings',
  author: 'J. R. R. Tolkien'
}

const bookJSON = JSON.stringify(book)
// bookJSON is now a string, not an object.
// bookJSON.title will not work.
// console.log(bookJSON.author) // undefined

// console.log(bookJSON);
// fs.writeFileSync('01-json.json', bookJSON)

// PARSE | We can use JSON.parse() to parse a string into an object.
const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook);
// fs.writeFileSync('01-json.txt', bookJSON);

// dataBuffer: json in data format, bytes.
// const dataBuffer = fs.readFileSync('./01-json.json');
// console.log(dataBuffer); // dataBuffer only
// console.log(dataBuffer.toString()); // buffer converted to string

// converting dataBuffer to string works the same as provinding (file path, 'utf-8');

// const dataBuffer = fs.readFileSync('./01-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);
// console.log(data.planet);
// console.log(data.age);

//
// Getting data and changing it
//
const dataString = fs.readFileSync('./01-json.json', 'utf-8');
console.log(dataString);
// Parse the data into an object
const user = JSON.parse(dataString);

// A nice function to change the data of the file :D
const changeData = (variable, name, planet, age) => {
  return variable.name = name, variable.planet = planet, variable.age = age;
}
changeData(user, "Beto", "Mars", 33);

// Or a simpler way:
// user.name = "Beto";
// user.age = 33;

// Get back to string
const jsonString = JSON.stringify(user);
console.log(jsonString);

// Write the string
fs.writeFileSync('./01-me.json', jsonString);