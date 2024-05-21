import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase_config';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { clearTodos } from '../../redux/Slices/TodoSlice';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const checkSignIn = auth.onAuthStateChanged((user) => {
      //console.log(user);
      setIsLoggedIn(!!user);
    });
    return () => checkSignIn();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearTodos());
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const displayNamelocal = auth?.currentUser?.displayName;
  return (
    <div className='bg-black font-semibold italic text-white h-auto flex items-center justify-between'>
      <div className='flex items-center'>
        <Link to="/alltodos">
          <div className='text-2xl font-serif mx-5 px-2 py-2'>Todo</div>
        </Link>
      </div>
      {/* Hamburger icon for mobile */}
      {isMobile && (
        <div className='mr-5 cursor-pointer' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      )}
      {/* Menu items */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile && !isMenuOpen ? 'hidden' : 'block'} w-full lg:w-auto`}>
        <Link
          to="/alltodos"
          className={location.pathname === '/alltodos' ? 'text-yellow-500' : 'text-white'}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          <div className='text-m font-serif mx-5 px-2 py-2'>All Todos</div>
        </Link>
        <Link
          to="/pending"
          className={location.pathname === '/pending' ? 'text-yellow-500' : 'text-white'}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Pending Todos</div>
        </Link>
        <Link
          to="/completed"
          className={location.pathname === '/completed' ? 'text-yellow-500' : 'text-white'}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Completed Todos</div>
        </Link>
        {!isLoggedIn && <Link
          to="/"
          className={location.pathname === '/' ? 'text-yellow-500' : 'text-white'}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Sign In</div>
        </Link>}
        {isLoggedIn &&
          <>
            <div className='text-sm items-center justify-center font-serif mx-5 px-2 py-2'>Hi {displayNamelocal? displayNamelocal: auth?.currentUser?.email}</div>
            <button
              className="bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-28 items-center justify-center"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
