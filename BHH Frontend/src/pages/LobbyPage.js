import ChatComponent from "../components/lobby/ChatComponent";
import PlayerListComponent from "../components/lobby/PlayerListComponent";

const LobbyPage = () => {
  return (
    <div id="main-container">
      <ChatComponent />
      <PlayerListComponent />
    </div>
  );
};
export default LobbyPage;
