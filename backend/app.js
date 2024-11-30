// env configration always on top place
const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())   // for all origin

const connect_DB = require('./db/db')
connect_DB()

app.get('/',(req, res)=>{
    res.json('welcome')
})

module.exports = app