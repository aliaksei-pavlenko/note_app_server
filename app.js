const express = require('express');
const fs = require('fs');

const app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
}); 


// Bodyparser
app.use(express.json({extended: false}));


// Create
app.post('/',(req,res)=>{
    fs.writeFileSync('store.json',JSON.stringify(req.body));
    res.send(fs.readFileSync('store.json').toString());
})

// Update
app.put('/',(req,res)=>{
    
})

// Read
app.get('/',(req,res)=>{
    res.send(fs.readFileSync('store.json').toString());
})

// Delete
app.delete('/',(req,res)=>{
    fs.writeFileSync('store.json',JSON.stringify(req.body));
    res.send(fs.readFileSync('store.json').toString());
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));