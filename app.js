const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(cors());
connectDB();

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

module.exports = app;