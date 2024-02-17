import { useRef } from "react";
import sendWsMessage from "../../../utils/sendWsMessage";
import ReadyBtn from "./ReadyBtn";
// import { useNavigate } from "react-router-dom";

const MessageNReady = ({ socket, username }) => {
  let messageInputRef = useRef();

  return (
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
            sendWsMessage(socket, dataCollection, username, "sendMessage");
            messageInputRef.current.value = "";
          }
        }}
      >
        Send
      </button>
      <ReadyBtn socket={socket} />
      <span>3/4</span>
      <i className="fa-solid fa-user"></i>
    </div>
  );
};

export default MessageNReady;
