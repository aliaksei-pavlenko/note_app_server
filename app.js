const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

let addNote = require('./addNote');
let deleteNote = require('./deleteNote');
let updateNote = require('./updateNote');

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
}); 


// Bodyparser
// app.use(express.json({extended: false}));
const jsonParser = bodyParser.json();
const textParser = bodyParser.text();


// Create
app.post('/',textParser,(req,res)=>{
    addNote(req.body);
    res.send(fs.readFileSync('store.json').toString());
})

// Update
app.put('/',jsonParser,(req,res)=>{
    updateNote(req.body.id,req.body.newtext);
    res.send(fs.readFileSync('store.json').toString());
})

// Read
app.get('/',(req,res)=>{
    res.send(fs.readFileSync('store.json').toString());
})

// Delete
app.delete('/',textParser,(req,res)=>{
    deleteNote(Number(req.body));
    res.send(fs.readFileSync('store.json').toString());
})




const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));