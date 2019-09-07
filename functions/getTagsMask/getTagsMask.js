
let getTagsMask = (allNotes) => {
    let unsortedTags = [];
    allNotes.forEach((obj) => {
        obj.tags.forEach((tag) => {
            if (tag !== '') {
                unsortedTags.push(tag);
            }
        })
    })
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    let uniqueTags = unsortedTags.filter(onlyUnique);

    // sort by alphabet order
    uniqueTags.sort(function (a, b) {
        return a.localeCompare(b);
    });

    let allTags = {};

    uniqueTags.forEach((tag) => {
        allTags[tag] = [];
    })

    uniqueTags.forEach((tag) => {
        allNotes.forEach(obj => {
            // console.log(obj,tag)
            if (obj.tags.find(element => element === tag) !== undefined) {
                allTags[tag].push(obj.id)
            }
        })
    })
    return allTags;
}

module.exports = getTagsMask;