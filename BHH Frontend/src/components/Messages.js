const Messages = ({ messages }) => {
  const userJoined = (message, index) => {
    return (
      <div key={index} className="message">
        <span>{message.username} joined the chat.</span>
      </div>
    );
  };

  const userTyped = (message, index) => {
    return (
      <div key={index} className="message">
        <span style={{ fontWeight: "bold" }}> {message.username}</span>
        <span style={{ fontWeight: "italic" }}> {message.text} </span>
      </div>
    );
  };

  return (
    <div id="messages">
      {messages.map((message, index) => {
        if (message.instruction === "doConnect") {
          return userJoined(message, index);
        } else if (message.instruction === "sendMessage") {
          return userTyped(message, index);
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Messages;
