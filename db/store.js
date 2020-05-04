const util = require('util')
const fs = require('fs')

const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  read() {
    return readFileAsync("./db/db.json", "utf8")
  }

  write(note) {
    return writeFileAsync("./db/db.json", JSON.stringify(note))
  }

  getNotes() {
     return this.read().then(notesJson => {
      var noteObj = JSON.parse(notesJson);
      var list = [];
      list.push(noteObj);
      return noteObj
      // parse the JSON string and turn into an object
      // add them to a list
      // return that list (array)
    })
  }

  addNote(note) {
    console.log(note.text);
    var newNote = {
      text: note.text,
      title: note.title,
      id: uuidv1()
    }
    console.log(newNote);
    return this.getNotes().then(notes => {
      notes.push(newNote);
      return this.write(notes)
    });
    
    // use the note argument
    // create a new note object with your required fields (text, title, id)
    // write that object to the json file
  }

  removeNote(id) {
    
    
    note.filter(note => note.id)

    // get all notes
    // remove the note with the given id
    // and return a list of notes that does NOT have that id (in essence the filtered list)
  }

}

module.exports = new Store()