import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSession } from "../actions/authActions";

const SERVER_URL = "http://26.162.187.120:8081";

const useLogin = (endPointValue) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (username) => {
    setUsername(username);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const loginUser = async () => {
    try {
      const response = await fetch(SERVER_URL + endPointValue, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();

        dispatch(setSession(data));

        // Save user data in localStorage
        localStorage.setItem("userData", JSON.stringify(data));

        // Navigate to the lobby page
        navigate("/lobby");
      } else if (!response.ok) {
        // Handle error, maybe show a message to the user
        console.error("Login failed");
        return;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    username,
    password,
    userID,
    setUserID,
    handleUsernameChange,
    handlePasswordChange,
    loginUser,
  };
};

export default useLogin;
