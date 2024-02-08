import Chat from "../components/lobby/Chat";
import { useDispatch, useSelector } from "react-redux";
import ExplorerSelection from "../components/lobby/ExplorerSelection";
// import PlayerListComponent from "../components/lobby/PlayerListComponent";

const LobbyPage = () => {
  let username = useSelector((state) => state.auth.username);
  return (
    <div id="main-container">
      <Chat username={username} />
      <ExplorerSelection username={username} />
    </div>
  );
};
export default LobbyPage;
