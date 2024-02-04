import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sendWsMessage from "../utils/sendWsMessage";
import isCyrillic from "../utils/isCyrillic";
import { messageManager } from "../utils/chatUtils";

const ChatComponent = () => {
  let navigate = useNavigate();
  let socket = new WebSocket("ws://26.128.47.198:3001");
  let [messages, setMessages] = useState([]); // message structure : "{ test, username, guideByServer }"
  let userFromRedux = useSelector((state) => state.auth.user);
  let username =
    userFromRedux === "" ? "Orozov SYS SIG IS NOT Gei" : userFromRedux;
  let messageInputRef = useRef();
  let messageContainer = useRef();

  socket.addEventListener("message", (event) => {
    let newMessage = JSON.parse(event.data);
    if (!newMessage.text) {
    }
    if (!messages.includes(newMessage)) {
      setMessages([...messages, newMessage]);
    }
  });
  const readyPage = () => {
    navigate("/game1");
  };

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
              {" "}
              {username}
            </span>{" "}
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
            <div className="input-container">
              <input
                type="text"
                id="messageInput"
                placeholder="Type your message..."
                ref={messageInputRef}
              />
              <button
                id="send-button"
                onClick={() => {
                  if (messageInputRef.current.value !== "") {
                    let text = messageInputRef.current.value.trim();
                    let dataCollection = { text };
                    sendWsMessage(
                      socket,
                      dataCollection,
                      username,
                      "sendMessage"
                    );
                    messageInputRef.current.value = "";
                  }
                }}
              >
                Send
              </button>
              <button onClick={readyPage}>Ready</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatComponent;
