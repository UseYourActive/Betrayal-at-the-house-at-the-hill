import { useNavigate } from "react-router-dom";
// import sendWsMessage from "../../../utils/sendWsMessage";
import { useDispatch } from "react-redux";
import { setUsername } from "../../../actions/authActions";
/* eslint-disable jsx-a11y/anchor-is-valid */

const LoginBtn = ({ username /* with Loginlogic -> userData*/ }) => {
  const dispatch = useDispatch();
  let isLogged = false; // comment when LoginLogic is on
  //const socket = new WebSocket("ws://26.128.47.198:3001"); // in waiting for backEndLogic
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (username !== "") {
      //loginUser("users/" + username, navigate);
      isLogged = true;
      if (isLogged) {
        // let handledData = {userID, username};
        let handledData = { username };
        // dispatch(setSession({userID, username}))
        dispatch(setUsername(username));
        /*
        webSocket is turned off.
        sendWsMessage(socket, { text: "eha" }, username, "doConnect");
        */
        localStorage.setItem("userData", JSON.stringify(handledData));
        navigate("/lobby");
      } else {
        console.log("Wrong Username");
      }
    } else {
      alert("Enter not null message, LUL/");
    }
  };
  return (
    <a className="logButton" onClick={handleLogin}>
      Log In
    </a>
  );
};

export default LoginBtn;
