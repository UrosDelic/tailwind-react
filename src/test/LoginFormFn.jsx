import { useState } from "react";
import "../assets/style.css";
import "../components/LoginForm/LoginForm.css";
import getData from "../client/GetData";
import Dinput from "../components/customElements/Dinput";
import DtextArea from "../components/customElements/DtextArea";
// import DtextAreaFn from "./DtextAreaFn";

const LoginFormFn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoText, setInfoText] = useState("");
  const [txtAreaHidden, setTxtArea] = useState(false);
  //const [state, setState] = useState({ password: "", email: "" });

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  // const testHandle = () => {
  //   setState({ ...state, email: "test" });
  // };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };
  const getServerData = () => {
    getData.getData().then((response) => {
      //setState({ ...state, email: response.email });
      setEmail(response.email);
      setPassword(response.password);
      setTxtArea(true);
      setInfoText(`Data for user ${response.email}`);
    });
  };
  const postInputData = () => {
    const obj = { email, password };
    getData
      .postData(obj)
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
    <div className='loginForm-container'>
      <h1 className='heading mb-8'>Ajax - Node.js in React</h1>
      <div className='inputs-container mt-11 mb-5'>
        <label className='label' htmlFor='email'>
          Email:
        </label>
        <Dinput type='text' id='emailField' value={email} onChange={emailHandleChange} />
        <label className='label mt-5' htmlFor='password'>
          Password:
        </label>
        <Dinput
          type='password'
          id='passwordField'
          value={password}
          onChange={passwordHandleChange}
        />
      </div>
      <button
        disabled={!password || !email}
        className='btn post-button mt-5'
        id='btn-post-data'
        onClick={postInputData}
        text-on-hover='Type in your credentials'
      >
        <span className='span-post-btn mt-5'>Post Data</span>
      </button>
      <button className='btn mt-2' id='btn-get-data' onClick={getServerData}>
        <span>Get data</span>
      </button>
      <div className='displayArea mt-10'>
        <DtextArea hidden={!txtAreaHidden} readOnly value={showInfo()} />
      </div>
    </div>
  );
};

export default LoginFormFn;
