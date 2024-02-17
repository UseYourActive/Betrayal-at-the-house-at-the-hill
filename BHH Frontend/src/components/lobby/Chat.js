import { useEffect, useRef, useState } from "react";
import { messageManager } from "../../utils/chatUtils";
import MessageNReady from "./lobbyWidgets/Message&Ready";

const Chat = ({ username }) => {
  let [messages, setMessages] = useState([]);
  let messageContainer = useRef();
  let socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://26.162.187.120:8082");
    socketRef.current.addEventListener("open", (event) => {
      console.log("I connected");
    });

    socketRef.current.addEventListener("message", (event) => {
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

    socketRef.current.onclose = () => socketRef.current.close();
  });

  return (
    <>
      <div className="chat-container">
        <h3 className="chatHeader">Chat</h3>
        <div id="messages" ref={messageContainer}>
          <div id="messagesContent">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {messageManager(message)}
              </div>
            ))}
          </div>
        </div>
        <MessageNReady socket={socketRef.current} username={username} />
      </div>
    </>
  );
};
export default Chat;
