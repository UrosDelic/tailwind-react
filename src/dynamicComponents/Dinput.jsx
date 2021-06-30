import React from "react";

const Dinput = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Dinput;
