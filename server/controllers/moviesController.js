const Movie = require('../models/Movie');
const moment = require('moment');

// GET all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a movie
const addMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    releseDate: moment().format(req.body.releseDate),
    director: req.body.director,
    cast: req.body.cast,
    poster: req.body.poster,
    rating: req.body.rating,
    genre: req.body.genre,
  });
  try {
    const newMovie = await movie.save();
    res.json({ newMovie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMovie = (req, res) => {
  res.send('GET this movie');
};

const updateMovie = (req, res) => {
  res.send('PUT a movie');
};

const deleteMovie = (req, res) => {
  res.send('DELETE a movie');
};

module.exports = { getMovies, addMovie, getMovie, updateMovie, deleteMovie };
