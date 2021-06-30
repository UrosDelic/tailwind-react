import { useState } from "react";
import "../../index.css";
import "./LoginForm.css";
import getData from "../../HttpClient/GetData";
import Dinput from "../../dynamicComponents/Dinput";
import DtextArea from "../../dynamicComponents/DtextArea";
import Navbar from "../Navbar/Navbar";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoText, setInfoText] = useState("");
  const [txtAreaHidden, setTxtArea] = useState(false);

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };
  const getServerData = () => {
    getData
      .getData()
      .then((response) => {
        setEmail(response.email);
        setPassword(response.password);
        setTxtArea(true);
        setInfoText(`Data for user ${response.email}`);
      })
      .catch((error) => console.error(error));
  };
  const postInputData = () => {
    const obj = { email, password };
    getData
      .postLoginData(obj)
      .then((response) => {
        setInfoText(`User ${response.email} is authorized!`);
        setTxtArea(true);
      })
      .catch((error) => console.error(error));
  };
  const showInfo = () => {
    if (infoText === "") {
      return ``;
    } else return infoText;
  };

  return (
    <div className='playground-container'>
      <Navbar></Navbar>
      <div className='loginForm-container p-3 w-2/3 md:w-1/2 xl:w-1/4'>
        <h1 className='heading text-center md:text-left mb-8'>Ajax - Node.js in React</h1>
        <div className='inputs-container items-center md:items-start xl:items-start md:ml-5 mt-20 mb-5 flex flex-col xl:ml-5'>
          <label className='label mb-1' htmlFor='email'>
            Email:
          </label>
          <Dinput
            className='w-1/2 md:w-2/5 xl:w-2/5'
            type='text'
            id='emailField'
            value={email}
            onChange={emailHandleChange}
          />
          <label className='label mt-5 mb-1' htmlFor='password'>
            Password:
          </label>
          <Dinput
            className='w-1/2 md:w-2/5 xl:w-2/5'
            type='password'
            id='passwordField'
            value={password}
            onChange={passwordHandleChange}
          />
        </div>
        <div className='flex flex-col items-center md:items-start xl:items-start xl:ml-5 md:ml-5'>
          <button
            disabled={!password || !email}
            className='post-button mt-5 transition duration-500 transform hover:-translate-y-1 hover:scale-100 w-2/5 font-bold'
            id='btn-post-data'
            onClick={postInputData}
            text-on-hover='Type in your credentials'
          >
            <span className='span-post-btn mt-5'>Post Data</span>
          </button>
          <button
            className='mt-2 transition duration-500 transform hover:scale-100 w-2/5 font-bold'
            id='btn-get-data'
            onClick={getServerData}
          >
            <span>Get data</span>
          </button>
        </div>

        <div className='displayArea mt-10 xl:ml-5 md:ml-5 text-center md:text-left xl:text-left'>
          <DtextArea
            className='w-1/2 md:w-2/5 xl:w-2/5'
            hidden={!txtAreaHidden}
            readOnly
            value={showInfo()}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
