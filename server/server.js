const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moviesRouter = require('./routes/moviesRouter');

const app = express();
app.use(cors());

// Setup DB connection
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('MongoDB connected')
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/movies', moviesRouter);

// Start listining for server
app.listen(5000, () => {
  console.log('server listening on port 5000');
});
