// env configration always on top place
const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const cors = require('cors');
app.use(cors())   // for all origin

// db connection
const connect_DB = require('./db/db');
connect_DB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const userRouter = require('./routes/user.routes')

app.use('/users', userRouter)

module.exports = app