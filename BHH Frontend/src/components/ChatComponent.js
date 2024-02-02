import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sendWsMessage from "../utils/sendWsMessage";
const ChatComponent = () => {
  let navigate = useNavigate();
  let socket = new WebSocket("ws://25.48.115.65:3001");
  let [messages, setMessages] = useState([]); // message structure : "{ test, username, guideByServer }"
  let username = useSelector((state) => state.auth.user);
  let messageInputRef = useRef();
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

  const userJoined = (username) => {
    return (
      <div key={Math.random() * 30984 + 2} style={{ color: "white" }}>
        <span>{username} joined the chat.</span>
      </div>
    );
  };

  const userTyped = ({ text, username, instruction }) => {
    return (
      <div key={Math.random() * 30984 + 2} style={{ color: "white" }}>
        <span style={{ fontWeight: "bold" }}> {username}</span>
        <span style={{ fontWeight: "italic" }}> {text} </span>
      </div>
    );
  };

  const messageManager = (message) => {
    if (message.instruction === "doConnect") {
      return userJoined(message.username);
    } else if (message.instruction === "sendMessage") {
      return userTyped(message);
    }
  };
  return (
    <div>
      <div className="big-container">
        <h1>Game Lobby</h1>
        <div className="left-component">
          <h2>
            {" "}
            <span className="loggedText">Logged as:</span>{" "}
            <span className="username"> {username}</span>{" "}
          </h2>{" "}
        </div>
        <div className="right-component">
          <div className="chat-container">
            <div id="messages">
              {messages.map((message) => messageManager(message))}
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
                  let text = messageInputRef.current.value.trim();
                  let dataCollection = { text };
                  sendWsMessage(
                    socket,
                    dataCollection,
                    username,
                    "sendMessage"
                  );
                  messageInputRef.current.value = "";
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
