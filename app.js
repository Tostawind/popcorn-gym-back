const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

module.exports = app;