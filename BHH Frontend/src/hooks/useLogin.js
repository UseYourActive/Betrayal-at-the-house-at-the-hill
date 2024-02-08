import { useState } from "react";

const SERVER_URL = "http://26.162.187.120:8081/";

const useLogin = ({ endPointValue }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [isLogged, setLogged] = useState(false);
  const handleIsLoggedChange = () => {
    setLogged(!isLogged);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (navigate) => {
    try {
      const response = await fetch(SERVER_URL + endPointValue, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        // Handle error, maybe show a message to the user
        console.error("Login failed");
        return;
      }
      const data = await response.json();
      setLogged(true);
      console.log(isLogged);
      console.log(data);
      // Save user data in localStorage
      localStorage.setItem("userData", JSON.stringify(data));

      // Navigate to the lobby page
      navigate("/lobby");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    username,
    password,
    userID,
    isLogged,
    setUserID,
    handleUsernameChange,
    handlePasswordChange,
    handleIsLoggedChange,
    loginUser,
  };
};

export default useLogin;
