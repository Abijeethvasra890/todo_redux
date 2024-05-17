import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase_config';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { clearTodos } from '../../redux/Slices/TodoSlice';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const checkSignIn = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => checkSignIn();
  }, [auth.currentUser]);

   const handleSignOut = async() => {
    try{
        await signOut(auth);
        dispatch(clearTodos());
       // alert("User Signed Out");
       navigate("/signin");
    }catch(err){
        alert(err);
    }
}

  return (
    <div className='bg-black font-semibold italic text-white h-12 flex items-center justify-between'>
      <div className='flex items-center'>
        <Link to="/">
          <div className='text-2xl font-serif mx-5 px-2 py-2'>Todo</div>
        </Link>
        <Link
          to="/"
          className={location.pathname === '/' ? 'text-yellow-500' : 'text-white'}
        >
          <div className='text-m font-serif mx-5 px-2 py-2'>All Todos</div>
        </Link>
        <Link
          to="/pending"
          className={location.pathname === '/pending' ? 'text-yellow-500' : 'text-white'}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Pending Todos</div>
        </Link>
        <Link
          to="/completed"
          className={location.pathname === '/completed' ? 'text-yellow-500' : 'text-white'}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Completed Todos</div>
        </Link>
      </div>
      {/* Menu items */}
      <div className="flex">
       
        {!isLoggedIn && <Link
          to="/signin"
          className={location.pathname === '/signin' ? 'text-yellow-500' : 'text-white'}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>Sign In</div>
        </Link>}
        {isLoggedIn &&
          <>
            <div className='text-sm items-center justify-center font-serif mx-5 px-2 py-2'>Hi {auth?.currentUser?.email}</div>
            <button
            className="bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-28 items-center justify-center"
            onClick={handleSignOut}>Sign Out
            </button>
          </>
        }

      </div>
    </div>
  );
};

export default Navbar;
