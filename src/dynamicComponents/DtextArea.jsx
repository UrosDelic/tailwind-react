import React from "react";

const DtextArea = (props) => {
  return (
    <div>
      <textarea
        name="textArea"
        className={props.className}
        id={props.id}
        value={props.value}
        readOnly={props.readOnly}
        hidden={props.hidden}
      ></textarea>
    </div>
  );
};

export default DtextArea;
