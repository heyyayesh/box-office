import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImg from '../assets/background.jpg';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <section className='container mx-auto h-screen grid md:grid-cols-2 md:gap-4 gap-14 md:place-items-center justify-items-center '>
      <img
        src={BackgroundImg}
        alt='.'
        className='absolute top-0 left-0 z-[-1] w-screen h-screen object-cover'
      />
      <button
        onClick={() => navigate('/movies')}
        className='md:w-96 md:h-96 w-52 h-52 backdrop-blur active:scale-95 transition-transform duration-100 text-black text-xl text-bold rounded-xl shadow-2xl border-4 border-gray-700 md:place-self-center self-end '
      >
        Movies
      </button>
      <button className='md:w-96 md:h-96 w-52 h-52 backdrop-blur active:scale-95 transition-transform duration-100 text-black text-xl text-bold rounded-xl shadow-2xl border-4 border-gray-700 md:place-self-center self-start'>
        Shows
      </button>
    </section>
  );
};

export default Homepage;
