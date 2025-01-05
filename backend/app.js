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

// routes
const userRouter = require('./routes/user.routes')
const captainRouter = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes.js')
const rideRoutes = require('./routes/ride.routes.js')

app.use('/users', userRouter);
app.use('/captains', captainRouter);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;