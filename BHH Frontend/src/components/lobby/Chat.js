import { useRef, useState } from "react";
import { messageManager } from "../../utils/chatUtils";
import MessageNReady from "./lobbyWidgets/Message&Ready";

const Chat = ({ username, socket, messagesData }) => {
  let messageContainer = useRef();
  let [isMessageSending, setSendMessage] = useState(false);

  let handleIsMessageSent = () => {
    setSendMessage(!isMessageSending);
  };

  return (
    <>
      <div className="chat-container">
        <h3 className="chatHeader">Chat</h3>
        <div id="messages" ref={messageContainer}>
          <div id="messagesContent">
            {messagesData.map((message, index) => (
              <div key={index} className="message">
                {messageManager(message)}
              </div>
            ))}
          </div>
        </div>
        <MessageNReady
          socket={socket}
          username={username}
          sentHandler={handleIsMessageSent}
        />
      </div>
    </>
  );
};
export default Chat;
