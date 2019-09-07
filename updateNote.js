let fs = require('fs');

let getTagsMask = require('./functions/getTagsMask/getTagsMask');
let getTags = require('./functions/makeNoteObject/auxiliary functions/getTags');
let getTagsIds = require('./functions/makeNoteObject/auxiliary functions/getTagsIds');
let getWords = require('./functions/makeNoteObject/auxiliary functions/getWords');


let updateNote = (id,text) => {

    let newJSON = {notes:[]};

    let notes = JSON.parse(fs.readFileSync('store.json')).notes;

    notes.forEach(note => {
        let updatedNote = {};
        if(note.id == id){
            updatedNote = {...note};
            updatedNote.words = getWords(text);
            updatedNote.tags = getTags(text);
            updatedNote.tagsIds = getTagsIds(text);

            newJSON.notes.push(updatedNote);
        } else {
            newJSON.notes.push(note);
        }
    });
    
    newJSON.tagsMask = getTagsMask(newJSON.notes);

    fs.writeFileSync('store.json',JSON.stringify(newJSON));

}

module.exports = updateNote;