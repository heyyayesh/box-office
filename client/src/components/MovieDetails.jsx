import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`http://localhost:5000/movies/${id}`);
      const data = await response.json();
      setMovie(data);
    };

    getMovie();
  }, []);

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  ) : null;
};

export default MovieDetails;
