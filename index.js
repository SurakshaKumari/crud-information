const express = require('express');
const usercontroller = require('./controllers/usercontroller');
const connectdb = require('./db/connectdb');
const web = require('./routes/web.js')
const app = express();

//create connection
const db_url = "mongodb://localhost:27017"
app.set("view engine", "ejs")

//call database
connectdb(db_url);

app.use(express.urlencoded({extended:true }));

//load routes
app.use('/', web);


app.listen(3000, (req,res) => {
    console.log('heloo');
})
