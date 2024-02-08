import { useRef, useState } from "react";
import isCyrillic from "../../utils/isCyrillic";
import { messageManager } from "../../utils/chatUtils";
import MessageNReady from "./lobbyWidgets/Message&Ready";
const Chat = ({ username }) => {
  let socket = new WebSocket("ws://26.128.47.198:3001");
  let [messages, setMessages] = useState([]);
  let messageContainer = useRef();

  socket.addEventListener("message", (event) => {
    let newMessage = JSON.parse(event.data);
    if (newMessage.instruction === "sendMessage") {
      if (!messages.includes(newMessage)) {
        setMessages([
          ...messages,
          {
            ...newMessage,
            finalMess: newMessage.username + ":" + newMessage.text,
          },
        ]);
      }
    } else if (newMessage.instruction === "doConnect") {
      setMessages([
        ...messages,
        {
          ...newMessage,
          finalMess: newMessage.username + " has joined the chat.",
        },
      ]);
    } else if (newMessage.instruction === "userDisconnected") {
      console.log(newMessage);
    }
  });

  socket.onclose = () => socket.close();
  return (
    <div>
      <div className="big-container">
        <h1 className="textHeader">Game Lobby</h1>
        <div className="left-component">
          <h2>
            {" "}
            <span className="loggedText">Logged as:</span>{" "}
            <span
              className={
                "username " +
                (isCyrillic(username) ? "cyrillic-text" : "latin-text")
              }
            >
              {username}
            </span>
          </h2>{" "}
        </div>
        <div className="right-component">
          <div className="chat-container">
            <div id="messages" ref={messageContainer}>
              <div id="messagesContent">
                {messages.map((message, index) => (
                  <div key={index} className="message">
                    {messageManager(message)}
                  </div>
                ))}
              </div>
            </div>
            <MessageNReady socket={socket} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
