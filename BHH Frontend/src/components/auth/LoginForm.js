/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";
import LoginBtn from "./authWidgets/loginBtn";
import RedirectToRegisterBtn from "./authWidgets/goToRegisterBtn";

const LoginForm = () => {
  const navigate = useNavigate();
  let [username, setTestUsername] = useState(); // comment when server's up
  const {
    // username,
    // isLogged,
    // password,
    // userID,
    // setUserID,
    handleUsernameChange,
    handlePasswordChange,
    // handleIsLoggedChange,
    //  loginUser
  } = useLogin("");

  return (
    <div className="login">
      <div className="inputName">
        <input
          onChange={(e) => {
            handleUsernameChange(e);
            setTestUsername(e.target.value);
          }}
          type="text"
          placeholder="Enter your name..."
          maxLength={20}
          minLength={1}
        />
      </div>
      <div className="inputPass">
        <input
          onChange={handlePasswordChange}
          type="text"
          placeholder="Enter your password..."
          maxLength={20}
          minLength={1}
        />
      </div>

      <LoginBtn
        username={username} /*  userdata={{username, userID, password}} */
      />
      <RedirectToRegisterBtn />
    </div>
  );
};

export default LoginForm;
