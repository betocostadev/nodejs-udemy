/* Udemy - Nodejs developer
Introduction to Node.js */

// Node docs: https://nodejs.org/api/

const validator = require('validator');

// Asking for another file (use some modules);
const getNotes = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
// console.log(sum);

const notes = getNotes();
console.log(notes);

/* We added the npm package validator above just to test it. Using it below: */
const USER_ONE = {
  email: 'foo@bar.com',
  website: 'www.betocostadev.github.io'
};

const checkUserData = user => {
  let check = false;
  if (validator.isEmail(user.email)) {
    console.log('User email is valid');
  }
  if (validator.isURL(user.website)) {
    console.log('User website is valid');
  }
}

checkUserData(USER_ONE);