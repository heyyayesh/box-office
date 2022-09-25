import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from 'react-icons/ai';

const Nav = ({ visible, close }) => {
  return (
    <nav
      className={`bg-gray-100 fixed max-w-xs w-60 h-full z-20 ${
        visible ? 'translate-x-0' : '-translate-x-full'
      } transition-transform`}
    >
      <button className='absolute top-6 right-6 font-bold' onClick={close}>
        <AiOutlineMenuFold className='text-2xl' />
      </button>
      <h1 className='text-2xl font-medium p-4'>Welcome!</h1>
      <ul>
        <li className='text-lg cursor-pointer w-full odd:bg-white'>
          <Link to={'/'} className='block p-4' onClick={close}>
            Home
          </Link>
        </li>
        <li className='text-lg cursor-pointer w-full odd:bg-white'>
          <Link to={'/movies'} className='block p-4' onClick={close}>
            Movies
          </Link>
        </li>
        <li className='text-lg cursor-pointer w-full odd:bg-white'>
          <Link to={'/shows'} className='block p-4' onClick={close}>
            Shows
          </Link>
        </li>
      </ul>
      <p className='absolute bottom-2 text-xs text-center w-full'>
        copyright{' '}
        <a
          href='https://github.com/heyyayesh'
          target='blank'
          className='text-blue-600'
        >
          @heyyayesh
        </a>{' '}
        2022
      </p>
    </nav>
  );
};

export default Nav;
