let getWords = require("./auxiliary functions/getWords");
let getTags = require("./auxiliary functions/getTags");
let getTagsIds = require("./auxiliary functions/getTagsIds");

let makeNoteObject = (string) => {
    let noteObj = {
        id: Math.random(),
        date: new Date(),
        words: getWords(string),
        tags: getTags(string),
        tagsIds: getTagsIds(string)
    }
    return noteObj;
}

module.exports =  makeNoteObject;