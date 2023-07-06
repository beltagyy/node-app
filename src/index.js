const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const {Client} = require('pg');


//init app
const PORT = process.env.PORT || 4000; 
const app = express();

//connect to redis
const redisClient = redis.createClient({ url: 'redis://redis:6379' });
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', err => console.log('Connected to redis...'));
redisClient.connect();


// connect db
// const DB_USER= 'root';
// const DB_PASSWORD= 'example';
// const DB_PORT= 27017;
// const DB_HOST = '192.168.144.2';
// const URI = 'mongodb://root:example@mongo:27017';
// mongoose.connect(URI).then(()=> console.log('connected to db'))



// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 5432;
const DB_HOST = 'postgres';
const URI = 'postgresl://root:example@postgres:5432';
// mongoose.connect(URI).then(() => console.log('connected to db'))

const client = new Client({connectionString: URI });

client.connect()
.then(()=> console.log('connected to postgres db...'))
app.get('/', (req, res) => {

redisClient.set('products', 'products..');    
res.send('<h1> Hello there! </h1>');

});

app.get('/data', async (req, res) => {
    
    const products = await redisClient.get('products');
    res.send('<h1> Hello there! </h1> <h2> ${products}</h2>');

});


app.listen(PORT, () => console.log('app is up and running on port: ' ,PORT));