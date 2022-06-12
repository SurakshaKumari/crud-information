const express = require('express');
const connectdb = require('./db/connectdb');
const web = require('./routes/web.js')
const app = express();

//create connection
const db_url = "mongodb://localhost:27017"


//call database
connectdb(db_url);

//load routes
app.use('/student', web);
app.set("view engine", "ejs")
app.listen(3000, (req,res) => {
    console.log('heloo');
})
