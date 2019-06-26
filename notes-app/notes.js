/* Udemy - Nodejs developer
Notes APP*/
// Node docs: https://nodejs.org/api/

// Use fs to write and read files.
const fs = require('fs')

const getNotes = function () {
  return `Notes are...`;
}

const addNote = (title, body) => {
  // Check notes first
  const notes = loadNotes()
  // Filter for duplicate notes
  const duplicateNotes = notes.filter(note => note.title === title);
  // console.log(notes);
  // If there are no notes with the same name, then we add the note:
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(`Note added to your notes.`)
  } else {
    console.log('Duplicate note! Please check your notes, or change the title.')
  }
}

// Function to avoid some problems
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
  getNotes: getNotes,
  addNote: addNote
}