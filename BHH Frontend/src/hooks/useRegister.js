import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://26.162.187.120:8081";

const useRegister = (endPointValue) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (username) => {
    setUsername(username);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const registerUser = async () => {
    try {
      let fullUrl = SERVER_URL + endPointValue;
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (!response.ok) {
        // Handle error, maybe show a message to the user
        console.error("Register failed");
        return;
      } else {
        const data = await response.json();
        console.log(data);
        // Save user data in localStorage

        // Navigate to the lobby page
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during register:", error);
    }
  };
  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    registerUser,
  };
};

export default useRegister;
