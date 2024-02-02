import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import LobbyComponent from "../components/LobbyComponent";

const MainPage = () => {
  return (
    <div id="main-container">
      <LobbyComponent />
    </div>
  );
};

export default MainPage;
