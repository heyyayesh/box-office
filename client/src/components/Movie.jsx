import React from 'react';
import img from '../assets/interstellar.jpg';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const Movie = ({ title, desc }) => {
  return (
    <div className='border shadow-lg w-52 h-64 p-2 rounded-lg relative overflow-hidden group'>
      <img className='object-cover w-full h-full' src={img} alt='poster' />
      <div className='w-[calc(100%-1rem)] bg-white absolute bottom-2 p-2 translate-y-[100%] transition-transform ease-in-out group-hover:translate-y-[0] flex items-center justify-between '>
        <h1 className='text-lg font-semibold '>{title}</h1>
        <AiOutlineInfoCircle className='scale-125' />
      </div>
      
    </div>
  );
};

export default Movie;