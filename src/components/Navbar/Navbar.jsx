import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar-component p-5 flex flex-row justify-center'>
      <Link className='link' to='/'>
        <span className='hover:underline hover:text-gray-400 font-bold'>Home</span>
      </Link>
      <Link className='link' to='/signup'>
        <span className='ml-3 hover:underline font-bold hover:text-gray-400'>Sign Up</span>
      </Link>
      <Link className='link ml-3' to='/users'>
        Users Page
      </Link>
    </div>
  );
};

export default Navbar;
