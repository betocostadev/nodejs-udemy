/* Udemy - Nodejs developer
Introduction to Node.js */

// Node docs: https://nodejs.org/api/

// Asking for another file (use some modules);
const getNotes = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
// console.log(sum);

const notes = getNotes();
console.log(notes);