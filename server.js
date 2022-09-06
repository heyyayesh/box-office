const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const moviesRouter = require('./routes/moviesRouter');

const app = express();

app.use(express.json());

// Routes
app.use('/movies', moviesRouter);

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
