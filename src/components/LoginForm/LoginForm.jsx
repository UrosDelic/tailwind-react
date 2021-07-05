import React from "react";
import { useState } from "react";
import "../../index.css";
import "./LoginForm.css";
import Dinput from "../../dynamicComponents/Dinput";
import { Link, useHistory } from "react-router-dom";
import getData from "../../AxiosClient/GetData";
import auth from "../protectedRoute/Auth.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoText, setInfoText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const history = useHistory();

  const postInputData = () => {
    const obj = { email, password };
    getData
      .postLoginData(obj)
      .then((response) => {
        if (response.status < 300) {
          setLoggedIn(true);
          setInfoText("Success!");
          setTimeout(() => {
            auth.login(() => {
              history.push("/users");
            });
          }, 1000);
        }
      })
      .catch((error) => {
        setInfoText("log in failed!");
        console.log(error);
        setLoggedIn(false);
      });
  };

  return (
    <div className='playground-container'>
      <div className='loginForm-container p-3 w-2/3 md:w-1/2 xl:w-1/4'>
        <h1 className='heading text-center md:text-left mb-2 md:mb-8 xl:mb-8'>
          Ajax - Node.js in React
        </h1>
        <div className='inputs-container items-center md:items-start xl:items-start md:ml-5 mt-5 md:mt-20 xl:mt-20 mb-5 flex flex-col xl:ml-5'>
          <label className='label mb-1' htmlFor='email'>
            Email:
          </label>
          <Dinput
            className='w-2/3 md:w-1/2 xl:w-3/5'
            type='text'
            id='emailField'
            value={email}
            onChange={emailHandleChange}
          />
          <label className='label mt-5 mb-1' htmlFor='password'>
            Password:
          </label>
          <Dinput
            className='w-2/3 md:w-1/2 xl:w-3/5'
            type='password'
            id='passwordField'
            value={password}
            onChange={passwordHandleChange}
          />
        </div>
        <div className='flex flex-col items-center md:items-start xl:items-start xl:ml-5 md:ml-5'>
          <div className='signup-label'>
            <Link to='/signup' className=''>
              <label
                className='italic hover:underline cursor-pointer font-extralight text-xs md:text-sm'
                htmlFor='signup'
              >
                Don't have an account? Sign up!
              </label>
            </Link>
          </div>
          <button
            disabled={!password || !email}
            className='post-button mt-5 transition duration-500 transform hover:-translate-y-1 hover:scale-100 w-2/5  font-bold'
            id='btn-post-data'
            onClick={postInputData}
            text-on-hover='Type in your credentials'
          >
            <span className='span-post-btn mt-5'>Log In</span>
          </button>

          <p className={!loggedIn ? "text-red-500 mt-3 italic" : "text-green-500 mt-3 italic"}>
            {infoText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
