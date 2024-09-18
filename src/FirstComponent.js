import React from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = (props) => {
  console.log(props);

  return (
    <>
      <h1>Firstcomponent: This is a child of App</h1>
      <div className={props.style}>{props.data}</div>
      {/* <SecondComponent /> */}
    </>
  );
};

export default FirstComponent;
