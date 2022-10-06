import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import poster from '../assets/interstellar.jpg';
import { format } from 'date-fns';
import { BsCalendarDate } from 'react-icons/bs';
import { BiCategoryAlt, BiCameraMovie } from 'react-icons/bi';
import { MdPeopleOutline, MdOutlineDescription } from 'react-icons/md';
import { IoMdDoneAll } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`http://localhost:5000/movies/${id}`);
      const data = await response.json();
      setMovie(data);
    };

    getMovie();
  }, []);

  const handleMarkWatched = () => {
    // To be implemented
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/movies/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    navigate('/movies');
  };

  const GENRE = ['science fiction', 'drama', 'horror', 'thriller'];
  const CAST = [
    'Matthew McConaughey',
    'Anne Hathaway',
    'Jessica Chastain',
    'Mackenzie Foy',
    'Ellen Burstyn',
    'John Lithgow',
    'Timothee Chalamet',
    'David Oyelowo',
    'Collette Wolfe',
    'Francis X. McCartney',
    'Bill Irwin',
    'andrew Borba',
    'Wes Bentley',
    'William Devane',
    'Michael Caine',
    'David Gyasi',
    'Josh Stewar',
    'Casey Affleck',
  ];
  const DIRECTOR = 'Christopher Nolan Christopher Nolan Junior';

  return movie ? (
    <div>
      {/* Section to display Poster and Title */}

      <div className='relative'>
        <img
          src={poster}
          alt={`${movie.title} poster`}
          className='object-cover h-80 w-full'
        />
        <h1 className='uppercase absolute bg-[#00000055] p-4 w-full text-center bottom-0 text-2xl text-white font-medium'>
          {movie.title}
        </h1>
      </div>

      <section className='p-4 flex flex-col text-lg'>
        {/* Relese Date */}
        <div className='flex flex-col justify-center mb-4 border-b-2 pb-2'>
          <div className='flex items-center gap-2'>
            <BsCalendarDate />
            <h2 className='font-medium'>Released on : </h2>
          </div>
          <p>{format(new Date(movie.releaseDate), 'dd-MM-yyyy')}</p>
        </div>

        {/* Director */}
        <div className='flex flex-col justify-center mb-4 border-b-2 pb-2'>
          <div className='flex items-center gap-2'>
            <BiCameraMovie />
            <h2 className='font-medium'>Director : </h2>
          </div>
          <p className='capitalize'>{DIRECTOR}</p>
        </div>

        {/* Genre */}
        <div className='flex flex-col justify-center mb-4 border-b-2 pb-2'>
          <div className='flex items-center gap-2'>
            <BiCategoryAlt />
            <h2 className='font-medium'>Genre : </h2>
          </div>
          <p className='capitalize'>{GENRE.join(', ')}</p>
        </div>

        {/* Cast */}
        <div className='flex flex-col justify-center mb-4 border-b-2 pb-2'>
          <div className='flex items-center gap-2'>
            <MdPeopleOutline />
            <h2 className='font-medium'>Cast : </h2>
          </div>
          <p className='capitalize'>{CAST.join(', ')}</p>
        </div>

        {/* Description */}
        <div className='flex flex-col justify-center mb-4 pb-2'>
          <div className='flex items-center gap-2'>
            {/* <MdDescription /> */}
            <MdOutlineDescription />
            <h2 className='font-medium'>Description : </h2>
          </div>
          <p>{movie.description}</p>
        </div>
      </section>

      <div className='flex justify-around mb-14 gap-4 p-4'>
        <button
          onClick={handleMarkWatched}
          className='bg-green-400 hover:bg-green-300 text-lg p-2 rounded-md flex-1 flex gap-2 items-center justify-center'
        >
          Mark Watched
          <IoMdDoneAll />
        </button>
        <button
          onClick={handleDelete}
          className='bg-red-400 hover:bg-red-300 text-lg p-2 rounded-md flex-1 flex gap-2 items-center justify-center'
        >
          Delete Movie
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  ) : null;
};

export default MovieDetails;
