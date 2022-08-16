const express  = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs');
// var data = require('./data/tree.json')
// const fileName = './data/tree.json';
// const file = require(fileName);

let num = 0;

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.listen(4000, ()=> {
    console.log("SERVER STARTED")
})

app.get('/test', (req, res) => {
    console.log("Recived request")
    res.send({'data':'response success'})
})