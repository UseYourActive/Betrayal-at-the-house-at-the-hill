/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setUsername, logUser } from "../actions/authActions";
const LoginComponent = () => {
  const dispatch = useDispatch();
  const userInput = useRef();
  const socket = new WebSocket("ws://25.48.115.65:3001");

  const userIn = () => {
    let usernameValue = userInput.current.value.trim();
    if (usernameValue !== "") {
      socket.send(
        JSON.stringify({
          instruction: "doConnect",
          username: usernameValue,
        })
      );
      dispatch(logUser());
      dispatch(setUsername(usernameValue));
    } else {
      alert("Enter not null message, LUL/");
    }
  };

  return (
    <div className="main">
      <h1>
        Be<span className="span">t</span>rayal <span className="span">a</span>t
        Ho
        <span className="span">u</span>se o<span className="span">n</span> the{" "}
        <span className="span">H</span>
        ill
      </h1>
      <div className="centered-container">
        <div className="header">
          <i className="fa-solid fa-ghost left-icon"></i>
          <h3>Game Menu</h3>
          <i className="fa-solid fa-ghost right-icon"></i>
        </div>
        <div className="login">
          <input
            ref={userInput}
            type="text"
            className="username form-control"
            placeholder="Enter your name..."
            maxLength={20}
            minLength={1}
          />
          <a onClick={userIn} className="btnLogin">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
