import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar-component p-5'>
      <Link className='link mr-6' to='/'>
        <span className='mr-1 hover:underline hover:text-gray-400 font-bold'>Home</span>
      </Link>
      <Link className='link' to='/playground'>
        <span className='mr-1 hover:underline font-bold hover:text-gray-400'>Playground</span>
      </Link>
    </div>
  );
};

export default Navbar;
