import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar-component p-5'>
      <Link className='playGround-link' to='/playground'>
        <span className='mr-1 hover:underline'>Playground</span>
      </Link>
    </div>
  );
};

export default Navbar;
