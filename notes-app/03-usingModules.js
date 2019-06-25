/* Udemy - Nodejs developer
Installing, importing and using npm modules with Node.js */

// Node docs: https://nodejs.org/api/

// validator: Very good npm module to validate many kinds of inputs.
const validator = require('validator');

// chalk: customize the terminal output with this npm module.
const chalk = require('chalk');

// Using a custom module: asking for another file (use some modules);
const utils = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
// console.log(sum);

const utilities = utils();
console.log(utilities);

/* We added the npm package validator above just to test it. Also we are using chalk to color the lines of the output.
Using it below: */

const USER_ONE = {
  name: 'Beto',
  email: 'foo@bar.com',
  website: 'www.betocostadev.github.io'
};
const USER_TWO = {
  name: 'Komonno',
  email: 'komonno@mail',
  website: 'http/komonno.two'
}

console.log(`
${chalk.green.bold('Checking users data function')}
`);

const checkUserData = user => {
  if (validator.isEmail(user.email)) {
    console.log(`User ${chalk.bold(user.name)}, email is ${chalk.green.bold('VALID!')}`);
  } else {
    console.log(`User ${chalk.bold(user.name)}, email is ${chalk.bgRed.bold('INVALID!')}`);
  }
  if (validator.isURL(user.website)) {
    console.log(`User ${chalk.bold(user.name)}, website is ${chalk.green.bold('VALID!')}`);
  } else {
    console.log(`User ${chalk.bold(user.name)}, website is ${chalk.bgRed.bold('INVALID!')}`);
  }
}

checkUserData(USER_ONE);
checkUserData(USER_TWO);

console.log(`
Nodemon was also installed for this project, but it was installed globally.
Nodemon works like a css watch. Keeps track of the file for changes and then restart the process.
To use it, just run nodemon [name of the file], instead of node.`);