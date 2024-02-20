/* eslint-disable jsx-a11y/anchor-is-valid */
import Chat from "../components/lobby/Chat";
import { useSelector } from "react-redux";
import ExplorerSelection from "../components/lobby/ExplorerSelection";
import VideoComponent from "../components/background/VideoComponent";
// import PlayerListComponent from "../components/lobby/PlayerListComponent";
import { useEffect, useRef, useState } from "react";
import TextHeader from "../components/lobby/lobbyWidgets/TextHeader";
import PlayerList from "../components/lobby/PlayerList";
import { WEBSOCKET_URL, randomNumber } from "../data/serverURL";
import { sendLoginWsMessage } from "../utils/sendWsMessage";

const LobbyPage = () => {
  let socketRef = useRef(null);
  let [messages, setMessages] = useState([]);
  let [users, setUsers] = useState([]);

  let username =
    useSelector((state) => state.auth.username) || "TestUser" + randomNumber;

  useEffect(() => {
    socketRef.current = new WebSocket(WEBSOCKET_URL);

    const handleMessage = (event) => {
      let {
        text,
        username: messUsername,
        instruction,
      } = JSON.parse(event.data);
      if (instruction === "sendMessage") {
        console.log({ text, messUsername, instruction });
        setMessages((prevMessages) => [
          ...prevMessages,
          { text, username: messUsername, instruction },
        ]);
      } else if (instruction === "doConnect") {
        console.log("attempts doConnect");
      }
    };

    socketRef.current.addEventListener("open", (event) => {
      console.log("I connected");
      sendLoginWsMessage(socketRef.current, username);
      setUsers((prevUsers) => [...prevUsers, username]);
    });

    socketRef.current.addEventListener("message", handleMessage);

    return () => {
      socketRef.current.removeEventListener("open", () => {
        console.log("Socket opened");
      });
      socketRef.current.removeEventListener("message", handleMessage);
      socketRef.current.close();
    };
  }, []);

  return (
    <>
      <VideoComponent />
      <div id="main-container" key="mc">
        <TextHeader username={username} />
        <div id="grouped-container">
          <Chat
            username={username}
            socket={socketRef.current}
            messagesData={messages}
          />
          <ExplorerSelection username={username} />
          <PlayerList socket={socketRef.current} usersList={users} />
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
