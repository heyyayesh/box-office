import React from 'react';
import img from '../assets/interstellar.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/movies/${movie._id}`);
  };

  return (
    <div className='border shadow-lg w-52 h-64 p-2 rounded-lg relative overflow-hidden group'>
      <img className='object-cover w-full h-full' src={img} alt='poster' />
      <div className='w-[calc(100%-1rem)] bg-white absolute bottom-2 p-2 translate-y-[105%] transition-transform ease-in-out group-hover:translate-y-[0] flex items-center justify-between '>
        <h1 className='text-lg font-semibold '>{movie.title}</h1>
        <button onClick={goToDetails}>
          <AiOutlineInfoCircle className='scale-125' />
        </button>
      </div>
    </div>
  );
};

export default Movie;
