const getMovies = (req, res) => {
  res.send('GET all movies');
};

const addMovie = (req, res) => {
  res.send('POST a movie');
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
