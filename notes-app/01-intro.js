/* Udemy - Nodejs developer */
/* Introduction to Node.js */

// Node docs: https://nodejs.org/api/

console.log(`=== Node.js Developer Course ===`);
console.log(`=== Using the file system ===`);

// loading the module
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

// Adding more to the file (append)
const newText = `\nThis is the second line, it was added using fs.appendFileSync`;
fs.appendFileSync('notes.txt', newText);

// reading from the file:
const textFromNotes = fs.readFileSync('notes.txt', 'utf-8');
console.log(textFromNotes);