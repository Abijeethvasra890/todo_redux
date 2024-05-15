import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black font-semibold italic text-white h-12 flex items-center justify-between'>
      <Link to="/">
        <div className='text-2xl font-serif mx-5 px-2 py-2'>Todo</div>
      </Link>
      {/* Menu items */}
      <div className="flex">
        <Link
          to="/"
          className={location.pathname === '/' ? 'text-yellow-500' : 'text-white'}
        >
          <div className='text-l font-serif mx-5 px-2 py-2'>All Todos</div>
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
    </div>
  );
};

export default Navbar;
