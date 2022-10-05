import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Movie from './Movie';
import { FiPlusCircle } from 'react-icons/fi';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      setMovies(data);
    };

    getMovies();
  }, []);

  const addNewMovie = () => {
    navigate('/movies/add');
  };

  return movies.length ? (
    <>
      <section className='p-4 flex flex-col items-center'>
        <h1 className='text-2xl text-center mb-8 mt-2'>Movies</h1>
        <div className='flex flex-col gap-10'>
          {movies.map(movie => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Button to add new movie */}
      <button onClick={addNewMovie} className='fixed top-6 right-6'>
        <FiPlusCircle size={26} />
      </button>
    </>
  ) : null;
};

export default Movies;
