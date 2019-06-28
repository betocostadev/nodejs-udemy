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
const notes = require('./notes.js');


/* Argv version of yargs is different from the Node version: */
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
  describe: `Add a new note.
  Usage: node app.js add --title="note title" --body="note body"
  `,
  // Description of the command use --help to see
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
  handler(argv) {
    // Testing:
    // console.log(argv);
    // console.log(`Title: ${argv.title} Note: ${argv.body}`);
    // Actual function
    notes.addNote(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: `Remove a note.
  Usage: node app.js remove --title="note to be removed"
  `,
  builder: {
    title: {
      describe: `Title of the note to be removed`,
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Removing the note!');
    notes.removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: `List all notes.
  Usage: node app.js list
  `,
  handler() {
    notes.listNotes();
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: `Read a note.
  Usage: node app.js read --title="note to read"
  `,
  builder: {
    title: {
      describe: `Title of the note you want to read`,
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})


// console.log(yargs.argv);
yargs.parse(); // Using it instead of the console.log above.

