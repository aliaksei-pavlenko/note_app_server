let fs = require('fs');

let getTagsMask = require('./functions/getTagsMask/getTagsMask');

let deleteNote = (id) => {

    let newJSON = {notes:[]};

    let notes = JSON.parse(fs.readFileSync('store.json')).notes;

    notes.forEach(note => {
        if(note.id !== id){newJSON.notes.push(note);}
    });
    
    newJSON.tagsMask = getTagsMask(newJSON.notes);

    fs.writeFileSync('store.json',JSON.stringify(newJSON));
}

module.exports = deleteNote;