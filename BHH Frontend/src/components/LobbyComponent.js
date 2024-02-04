import ChatComponent from "./ChatComponent";
import PlayerListComponent from "./PlayerListComponent";

const LobbyComponent = () => {
  // Function to send a message
  return (
    <div>
      <ChatComponent />
      <PlayerListComponent />
    </div>
  );
};
export default LobbyComponent;
