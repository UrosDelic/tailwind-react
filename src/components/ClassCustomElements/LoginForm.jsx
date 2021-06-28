import React, { Component } from "react";
import "../../assets/style.css";
import "./LoginForm.css";
import getData from "../../client/GetData";
import DtextArea from "../customElements/DtextArea";
import Dinput from "../customElements/Dinput";
class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      infoText: "",
      email: "",
      password: "",
      txtAreaHidden: true,
    };

    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
  }

  emailHandleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordHandleChange = (event) => {
    this.setState({ password: event.target.value });
  };

  getServerData = () => {
    getData
      .getData()
      .then((response) => {
        console.log();
        this.setState({ email: response.email, password: response.password });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  postInputData = () => {
    const obj = {
      email: this.state.email,
      password: this.state.password,
    };
    getData
      .postData(obj)
      .then((response) => {
        this.setState({ infoText: `data sent successfully!`, txtAreaHidden: false });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  showInfo = () => {
    if (this.state.infoText === "") {
      return ``;
    } else return this.state.infoText;
  };

  render() {
    return (
      <div className='loginForm-container'>
        <h1>Ajax - Node.js in React</h1>
        <div className='inputs-container'>
          <label className='label' htmlFor='email'>
            Email:
          </label>
          <Dinput
            type='text'
            id='emailField'
            value={this.state.email}
            onChange={this.emailHandleChange}
          />
          <label className='label' htmlFor='password'>
            Password:
          </label>
          <Dinput
            type='password'
            id='passwordField'
            value={this.state.password}
            onChange={this.passwordHandleChange}
          />
          <button
            disabled={!this.state.password || !this.state.email}
            className='btn'
            id='btn-post-data'
            onClick={this.postInputData}
          >
            Post Data
          </button>
          <button className='btn' id='btn-get-data' onClick={this.getServerData}>
            Get data
          </button>
        </div>
        <div className='displayArea'>
          <DtextArea hidden={this.state.txtAreaHidden} readOnly value={this.showInfo()} />
        </div>
      </div>
    );
  }
}

export default LoginForm;
