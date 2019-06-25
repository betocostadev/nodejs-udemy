/* Udemy - Nodejs developer
Notes APP*/
// Node docs: https://nodejs.org/api/
/* For this project, the idea is to understand how to work with node.
The notes will be added by user input only with node and console, no browser interaction.
For the other projects there will be the use of node, mongodb and more. */

// chalk: customize the terminal output with this npm module.
const chalk = require('chalk');
// Asking for another file (use some modules);
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(`
${chalk.green.bold(notes)}
`);

const command = process.argv[2];

if (command === 'add') {
  console.log(`Adding note!`);
}
