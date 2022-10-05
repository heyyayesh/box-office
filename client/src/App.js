import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

function App() {
  const [nav, setNav] = useState(false);
  const close = () => setNav(false);

  return (
    <div className='App'>
      <Router>
        {/* Button to open the sidebar */}

        <button
          className='fixed top-6 left-6 z-20'
          onClick={() => setNav(true)}
        >
          <AiOutlineMenuUnfold className='text-2xl bg-white' />
        </button>

        {/* An overlay that appears when sidebar is open */}

        <div
          className={`fixed bg-black w-screen h-screen transition-opacity ${
            nav ? 'z-10 opacity-30' : 'z-0 opacity-0 pointer-events-none'
          }`}
          onClick={close}
        ></div>

        {/* Sidebar cum Navigation bar */}

        <Nav visible={nav} close={close} />

        {/* Routes */}

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/movies/add' element={<AddMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
