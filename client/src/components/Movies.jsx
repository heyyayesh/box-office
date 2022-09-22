import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      console.log(data[0].title);
      console.log(data[0].description);
      setMovies(data);
    };

    getMovies();
  }, []);

  console.log(movies);
  return movies.length ? (
    <section className='p-4 flex flex-col items-center'>
      <h1 className='text-2xl text-center mb-4' >Movies</h1>
      <div className='flex flex-col gap-10' >
        {movies.map(movie => (
          <Movie key={movie._id} title={movie.title} desc={movie.description} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Movies;
