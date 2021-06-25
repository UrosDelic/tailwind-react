import React, { Component } from "react";

class Dinput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Dinput;
