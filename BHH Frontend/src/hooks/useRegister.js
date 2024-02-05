import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://26.162.187.120:8081/";

const useRegister = (endPointValue) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = async () => {
    try {
      const response = await fetch(SERVER_URL + endPointValue, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (!response.ok) {
        // Handle error, maybe show a message to the user
        console.error("Login failed");
        return;
      } else {
        const data = await response.json();
        console.log(data);
        // Save user data in localStorage

        // Navigate to the lobby page
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
