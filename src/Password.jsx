import React, { useState } from "react";
import AddTodo from "./Todo";

const Password = () => {
  const [pass, setPass] = useState(false);
  function handleChange() {
    if (pass === true) {
      setPass(false);
    } else {
      setPass(true);
    }
  }
  return (
    <>
      <label htmlFor="">Password:</label>
      <input type={pass ? "text" : "password"} />
      <button onClick={handleChange}>{pass ? "Hide" : "Show"}</button>
    </>
  );
};

export default Password;
