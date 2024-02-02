import { useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import ChatComponent from "./ChatComponent";

const LobbyComponent = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  // Function to send a message
  return <div>{isLogged ? <ChatComponent /> : <LoginComponent />}</div>;
};
export default LobbyComponent;
