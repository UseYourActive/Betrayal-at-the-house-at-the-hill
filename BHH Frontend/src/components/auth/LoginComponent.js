/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { setUsername, logUser } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import sendWsMessage from "../../utils/sendWsMessage";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const {
    username,
    isLogged,
    handleUsernameChange,
    handlePasswordChange,
    loginUser,
  } = useLogin("");
  const socket = new WebSocket("ws://26.128.47.198:3001");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (username !== "") {
      loginUser("users/" + username, navigate);
      if (isLogged) {
        dispatch(logUser());
        dispatch(setUsername(username));
        sendWsMessage(socket, { text: "eha" }, username, "doConnect");
        navigate("/lobby");
      } else {
        console.log("Wrong Username");
      }
    } else {
      alert("Enter not null message, LUL/");
    }
  };
  return (
    <div className="login">
      <input
        onChange={handleUsernameChange}
        type="text"
        placeholder="Enter your name..."
        maxLength={20}
        minLength={1}
      />
      <input
        onChange={handlePasswordChange}
        type="text"
        placeholder="Enter your name..."
        maxLength={20}
        minLength={1}
      />
      <a
        onClick={() => {
          navigate("/register");
        }}
        className="btnLogin"
      >
        Register
      </a>
      <a onClick={handleLogin} className="btnLogin">
        Log In
      </a>
    </div>
  );
};

export default LoginComponent;
