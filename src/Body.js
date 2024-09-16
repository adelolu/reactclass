import React, { useState } from "react";

const Body = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("temi");
  const [email, setEmail] = useState("");
  let name = "tola";
  let handleClick = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{name}</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increament
      </button>
      <button onClick={handleClick}>decreament</button>
      <br />
      <br />
      <label className="form-label" htmlFor="">
        Username
      </label>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
        className="form-control w-50"
        type="text"
      />
      ,,
      <label htmlFor="">Email</label>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className="form-control w-50"
        type="email"
      />
      <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default Body;
