import React from "react";
import Dinput from "../../dynamicComponents/Dinput";
import { useState } from "react";
import getData from "../../AxiosClient/GetData";

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
    const obj = { email, password };
    getData
      .postRegisterData(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className='heading-container text-center mt-20'>
        <h2 className='heading italic mb-2 md:mb-8 xl:mb-8'>Sign Up</h2>
      </div>
      <div className='signup flex justify-center mt-20'>
        <div className='flex flex-col md:w-2/7 xl:w-1/5'>
          <Dinput
            className='signup-email-input mb-10'
            id='signupEmail'
            value={email}
            onChange={signupEmailHandleChange}
            placeholder={"email"}
          ></Dinput>

          <Dinput
            className='signup-password-input mb-10'
            id='signupPassword'
            type='password'
            value={password}
            onChange={signupPasswordHandleChange}
            placeholder={"password"}
          ></Dinput>

          <Dinput
            className='signup-repeat-password mb-10'
            id='signupRepeatPassword'
            type='password'
            value={repeatPassword}
            onChange={repeatPasswordHandleChange}
            placeholder={"repeat password"}
          ></Dinput>
          <button
            disabled={!password || !repeatPassword || password !== repeatPassword}
            className='signup-button w-2/3 font-bold md:mt-2 xl:mt-2'
            onClick={postInputData}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
