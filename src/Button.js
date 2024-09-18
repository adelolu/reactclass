import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.check} className={props.sty}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
