/* Udemy - Nodejs developer
Notes APP*/
// Node docs: https://nodejs.org/api/

// Use fs to write and read files.
const fs = require('fs');
const chalk = require('chalk');


// Add notes function
const addNote = (title, body) => {
  // Check notes first
  const notes = loadNotes()
  // Find duplicate notes
  const duplicateNote = notes.find(note => note.title === title);

  // Node Debugger test: Uncomment the line with 'debugger' below and use the following command:
  // node inspect app.js add --title="chastrufia" --body="The number is 42"
  // open chrome and go to chrome://inspect
  debugger;

  // Instead of filter, we are using find, because it will stop on the first one that matches.
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(`Note ${chalk.green.inverse.bold(title)} added to your notes.`)
  } else {
    console.log(`Note ${chalk.red.inverse.bold(title)} already exists. Please check your notes with: ${chalk.bold('node app.js list')}`)
  }
}

// Remove notes function
const removeNote = (title) => {
  const notes = loadNotes();
  // Making a variable to check all notes and filter all except the one to be removed
  // This is the easier way
  // Could have used another method like findIndex and use splice... more work
  const notesToKeep = notes.filter(note => note.title !== title);
  // If the notes array is bigger than notesToKeep array, then the note was found
  if(notes.length > notesToKeep.length) {
    console.log(`Removed note: ${chalk.green.inverse.bold(title)}`);
    // Write the new file with the remaining notes
    saveNotes(notesToKeep);
  } else {
    console.log(`Note ${chalk.red.inverse.bold(title)} was not found on your notes!`);
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(`${chalk.green.bold('Your notes: ')}`);

  notes.forEach(title => {
    console.log(chalk.blue.bold(title.title));
  });

  if (notes.length === 0) {
    console.log(`Looks like you don't have any notes, why don't you just add a note with:
    ${chalk.bold(`node app.js add --title"note title" --body="note body"`)}`)
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteToRead = notes.find(note => note.title === title);
  if(!noteToRead) {
    console.log(`Note ${chalk.bgRed.bold(title)} not found. Use ${chalk.bold('app.js list')} to check your notes.`)
  } else {
    console.log(` === ${chalk.blue.bold(noteToRead.title)} === `)
    console.log(`${chalk.blue(noteToRead.body)}`)
  }
}

// Function to save the notes after passed all checks.
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('./notes.json', dataJSON);
}

// Function to load all notes
const loadNotes = () => {
  /* If we don't make sure there is a notes.json file, the console will return an error.
  Let's prevent this to provide a better error report.
  We will run the code inside the try, if it fails, it will run the catch */
  try {
    const dataBuffer = fs.readFileSync('./notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return []; // Return just this empty array
  }
}

// module.exports = getNotes;
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}