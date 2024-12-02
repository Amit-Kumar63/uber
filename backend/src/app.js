const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/users', userRoutes);

module.exports = app;