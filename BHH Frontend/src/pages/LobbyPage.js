import ChatComponent from "../components/lobby/ChatComponent";
import ExplorerSelection from "../components/lobby/ExplorerSelection";
import PlayerListComponent from "../components/lobby/PlayerListComponent";

const LobbyPage = () => {
  return (
    <div id="main-container">
      <ChatComponent />
      <PlayerListComponent />
      <ExplorerSelection />
    </div>
  );
};
export default LobbyPage;
