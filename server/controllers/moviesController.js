const Movie = require('../models/Movie');
const moment = require('moment');

// GET all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
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
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET a single movie details
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE a movie
const updateMovie = async (req, res) => {
  res.send('Not yet implemented.');
};

// DELETE a movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    await movie.remove();
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getMovies, addMovie, getMovie, updateMovie, deleteMovie };
