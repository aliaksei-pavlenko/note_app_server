let fs = require('fs');

let makeNoteObject = require('./functions/makeNoteObject/makeNoteObject');
let getTagsMask = require('./functions/getTagsMask/getTagsMask');

let addNote = (string) => {
    let newNote = makeNoteObject(string);

    let newJSON = {};

    newJSON.notes = JSON.parse(fs.readFileSync('store.json')).notes;
    newJSON.notes.push(newNote);

    newJSON.tagsMask = getTagsMask(newJSON.notes);

    fs.writeFileSync('store.json',JSON.stringify(newJSON));
}

module.exports = addNote;