import "./App.css";
import Nav from "./Nav";
import Body from "./Body";
import AddTodo from "./Todo";
import Password from "./Password";
import FirstComponent from "./FirstComponent";
import Button from "./Button";

function App() {
  let message = "pass message to first component";

  function signup() {
    console.log("signup successful");
  }

  function login() {
    console.log("login successful");
  }
  return (
    <>
      <div>
        {/* <Button check={login} sty="btn btn-secondary" title="Login" /> */}
      </div>
      <Nav />
      <AddTodo />
      {/* <FirstComponent data={message} style="bg-primary" name="firstcomponet" />
      <Button sty=" butt" title="Submit" />

      <Button check={signup} sty="btn btn-success" title="Google" /> */}
    </>
  );
}

export default App;
