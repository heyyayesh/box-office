import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      setMovies(data);
    };

    getMovies();
  }, []);

  return movies.length ? (
    <section className='p-4 flex flex-col items-center'>
      <h1 className='text-2xl text-center mb-4'>Movies</h1>
      <div className='flex flex-col gap-10'>
        {movies.map(movie => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Movies;
