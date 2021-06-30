import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page h-screen flex text-center items-center justify-center">
      <div className="">
        <h2>404 not found.</h2>
        <p>the requested page does not exist.</p>
        <Link className="hover:underline font-bold mt-2" to="/">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
