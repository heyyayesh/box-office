const express = require('express');
const router = express.Router();
const {
  getMovies,
  addMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/moviesController');

router.get('/', getMovies);
router.post('/', addMovie);
router.get('/:id', getMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
