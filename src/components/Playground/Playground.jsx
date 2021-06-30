import Dinput from "../../dynamicComponents/Dinput";
import Navbar from "../Navbar/Navbar";
// import DtextArea from "../../dynamicComponents/DtextArea";
import { useState } from "react";
import getData from "../../HttpClient/GetData";

const Playground = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const firstNameHandleChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandleChange = (event) => {
    setLastName(event.target.value);
  };

  const addressHandleChange = (event) => {
    setAddress(event.target.value);
  };

  const postInputData = () => {
    const obj = { firstName, lastName, address };
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
      <div className='playground flex flex-col m-5 h-screen items-center'>
        <label htmlFor=''>First Name:</label>
        <Dinput
          className='firstname-input mb-5 w-5'
          id='firstName'
          value={firstName}
          onChange={firstNameHandleChange}
        ></Dinput>
        <label htmlFor=''>Last Name:</label>
        <Dinput
          className='lastname-input mb-5 w-5'
          id='lastName'
          value={lastName}
          onChange={lastNameHandleChange}
        ></Dinput>
        <label htmlFor=''>Address:</label>
        <Dinput
          className='address-input mb-5 w-5'
          id='address'
          value={address}
          onChange={addressHandleChange}
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
