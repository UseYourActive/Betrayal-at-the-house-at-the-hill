/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useRef, useState } from "react";
import LoginBtn from "./authWidgets/loginBtn";
import RedirectToRegisterBtn from "./authWidgets/goToRegisterBtn";

const LoginForm = () => {
  let logUserRef = useRef();
  let logPassRef = useRef();

  const {
    username,
    isLogged,
    password,
    userID,
    setUserID,
    handleUsernameChange,
    handlePasswordChange,
    handleIsLoggedChange,
    loginUser,
  } = useLogin("/auth/login");

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="inputName">
        <input
          onChange={(e) => {
            handleUsernameChange(e.target.value);
          }}
          type="text"
          placeholder="Enter your name..."
          maxLength={20}
          minLength={1}
        />
      </div>
      <div className="inputPass">
        <input
          onChange={(e) => {
            handlePasswordChange(e.target.value);
          }}
          type="password"
          placeholder="Enter your password..."
          maxLength={20}
          minLength={1}
        />
      </div>

      <a className="logButton" onClick={loginUser}>
        Log In
      </a>
      <RedirectToRegisterBtn />
    </div>
  );
};

export default LoginForm;
