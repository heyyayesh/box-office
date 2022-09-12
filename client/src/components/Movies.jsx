import React, { useEffect, useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch('http://localhost:5000/movies/');
      const data = await response.json();
      setMovies(data);
    }

    getMovies();
  }, []);

  return (
    <div>
      <Movie></Movie>
    </div>
  );
}

export default Movies;
