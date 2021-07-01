import React from "react";
import Dinput from "../../dynamicComponents/Dinput";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import getData from "../../HttpClient/GetData";

const Playground = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const signupEmailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const signupPasswordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const repeatPasswordHandleChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const postInputData = () => {
    const obj = { email, password, repeatPassword };
    getData
      .postData(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='signup flex flex-col m-5 h-screen items-center'>
        <label htmlFor=''>Email:</label>
        <Dinput
          className='signup-email-input mb-5 w-1/5'
          id='signupEmail'
          value={email}
          onChange={signupEmailHandleChange}
        ></Dinput>
        <label htmlFor=''>Password:</label>
        <Dinput
          className='signup-password-input mb-5 w-1/5'
          id='signupPassword'
          value={password}
          onChange={signupPasswordHandleChange}
        ></Dinput>
        <label htmlFor=''>Repeat password:</label>
        <Dinput
          className='signup-repeat-password mb-5 w-1/5'
          id='signupRepeatPassword'
          value={repeatPassword}
          onChange={repeatPasswordHandleChange}
        ></Dinput>
        <button className='w-1/2' onClick={postInputData}>
          submit
        </button>
        {/* <label className='mt-5'>text area</label>
        <DtextArea></DtextArea> */}
      </div>
    </div>
  );
};

export default Playground;
