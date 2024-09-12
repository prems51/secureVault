const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors")

dotenv.config()

// Database Name
const dbName = 'passHub';
const app = express()
const port = process.env.PORT || 3000;

// serving front end files for hosting
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// Connection URL
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const client = new MongoClient(url);


app.use(bodyParser.json())
app.use(cors())

// connecting to server
client.connect();
console.log('Connected successfully to server');


// API to get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})



// API to insert password
app.post('/', async (req, res) => {
    const password = req.body;
    // console.log(password)
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send({success: true, result: findResult})
})


// API to remove password
app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({success: true, result: findResult})
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})