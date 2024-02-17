/* eslint-disable jsx-a11y/anchor-is-valid */
import Chat from "../components/lobby/Chat";
import { useSelector } from "react-redux";
import ExplorerSelection from "../components/lobby/ExplorerSelection";
import VideoComponent from "../components/background/VideoComponent";
import useLogOut from "../hooks/useLogOut";
// import PlayerListComponent from "../components/lobby/PlayerListComponent";
import { useDispatch } from "react-redux";
import { clearSession } from "../actions/authActions";
import { useEffect } from "react";
import TextHeader from "../components/lobby/lobbyWidgets/TextHeader";
import PlayerList from "../components/lobby/PlayerList";

const LobbyPage = () => {
  let username = useSelector((state) => state.auth.username) || "TestUser";
  useEffect(() => {});
  return (
    <>
      <VideoComponent />
      <div id="main-container">
        <TextHeader username={username} />
        <div id="grouped-container">
          <Chat username={username} />
          <ExplorerSelection username={username} />
          <PlayerList />
        </div>
      </div>
    </>
  );
};

export default LobbyPage;
/*

  const handleLogOut = () => {
    logOutUser();
    dispatch(clearSession());
  };


<a className="logButton" onClick={handleLogOut}>
Logout
</a>
*/
