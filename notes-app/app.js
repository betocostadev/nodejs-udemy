/* Udemy - Nodejs developer
Notes APP*/
// Node docs: https://nodejs.org/api/

/* For this project, the idea is to understand how to work with node.
The notes will be added by user input only with node and console, no browser interaction.
For the other projects there will be node, mongodb and more. */

// MODULES:
// chalk: customize the terminal output with this npm module.
const chalk = require('chalk');
// yargs: better parsing strings:
const yargs = require('yargs');
// Asking for another file (use some modules);
const getNotes = require('./notes.js');


/* Argv version of yargs is different: */
// console.log(yargs.argv);

// Change yargs version: check ver node app.js --version
yargs.version('1.0.1');

/* Using yargs!
We will use yargs to make our console commands for the application to work.
Yargs will be used to: add, remove, read and list notes.
*/

// create add command
yargs.command({
  command: 'add', // command value
  describe: 'Add a new note.', // Description of the command use --help to see
  // Add a build. Builder is an object with the options we want the command to support.
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // forces the use of the --title="" when the command is given.
      // demandOption: false == default.
      // If you want the corrent output, use the type key
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  // add a code handler: The actual code that will run when someone uses 'add'.
  // We will add (argv) inside the function and in the code block. This is because:
  // It will handle argv as the command argument we want
  handler: function (argv) {
    // console.log(`${chalk.green.bold('Adding a new note!')}`, argv);
    console.log(argv);
    console.log(`
Title: ${argv.title}
Note: ${argv.body}`);
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  handler: function () {
    console.log('Removing the note!');
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes.',
  handler: function () {
    console.log('Listing your notes:');
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note.',
  handler: function () {
    console.log('Reading your note:');
  }
})


// console.log(yargs.argv);
yargs.parse(); // Using it instead of the console.log above.

const notes = getNotes();
console.log(`
${chalk.green.bold(notes)}
`);
