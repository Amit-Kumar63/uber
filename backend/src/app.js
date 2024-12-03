const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;