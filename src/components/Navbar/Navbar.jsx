import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar-component p-5 flex flex-row justify-center'>
      <NavLink className='link' activeClassName='text-gray-400' exact to='/'>
        <span className='hover:underline hover:text-gray-400 font-bold'>Home</span>
      </NavLink>
      <NavLink className='link' activeClassName='text-gray-400' to='/signup'>
        <span className='ml-3 hover:underline font-bold hover:text-gray-400'>Sign Up</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
