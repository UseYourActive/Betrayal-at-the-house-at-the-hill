import { SERVER_URL } from "../data/serverURL";

const useLogOut = (endPointValue) => {
  // const [username, setUsername] = useState("");
  //  const [userID, setUserID] = useState("");
  //const navigate = useNavigate();
  // const dispatch = useDispatch();
  /*
  const handleUsernameChange = (username) => {
    setUsername(username);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };
*/
  const logOutUser = async () => {
    console.log(SERVER_URL + endPointValue);
    try {
      const response = await fetch(SERVER_URL + endPointValue, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify("alabala"),
      });
      console.log(response);
      if (!response.ok) {
        // Handle error, maybe show a message to the user
        console.error("Logout failed");
      }
      /* 
        const data = await response.json();
  
        dispatch(setSession(data));
  
        // Save user data in localStorage
        localStorage.setItem("userData", JSON.stringify(data));
  
        // Navigate to the lobby page
        navigate("/lobby");*/
      console.error("Logout failed");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return {
    logOutUser,
  };
};

export default useLogOut;
