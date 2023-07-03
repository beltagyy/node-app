const express = require("express");
const mongoose = require("mongoose");

//init app
const PORT = process.env.PORT || 4000; 
const app = express();

// connect db
const DB_USER= 'root';
const DB_PASSWORD= 'example';
const DB_PORT= 27017;
const DB_HOST = '192.168.144.2';
const URI = 'mongodb://root:example@mongo:27017';
mongoose.connect(URI).then(()=> console.log('connected to db'))

app.get('/', (req, res) => res.send('<h1> Hello there! </h1>'));

app.listen(PORT, () => console.log('app is up and running on port: ' ,PORT));