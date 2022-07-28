//Require Express
const express = require('express');

//Create instance from express
const app = express();

//Require dotenv
require('dotenv').config();

//Middleware bodyparser
app.use(express.json());

//Require function Connect
const connect = require('./config/ConnectDB')
connect();

//Create PORT
const PORT = process.env.PORT;

//Listen to the port
app.listen(PORT, (err)=>{
    err? console.log(err) :
    console.log(`Server is running on PORT : ${PORT}`)
})



//import router express
app.use ('/api/person', require('./routes/personRoute'))
app.use ('/api/user', require('./routes/userRoute'))