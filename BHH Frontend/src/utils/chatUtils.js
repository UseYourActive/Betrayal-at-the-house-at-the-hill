import isCyrillic from "./isCyrillic";

const userJoined = (username) => {
  return (
    <div key={Math.random() * 30984 + 2}>
      <span className={isCyrillic(username) ? "cyrillic-text" : "latin-text"}>
        {username} joined the chat.
      </span>
    </div>
  );
};

const userTyped = ({ text, username, instruction }) => {
  return (
    <div key={Math.random() * 30984 + 2}>
      <span
        className={isCyrillic(username) ? "cyrillic-text" : "latin-text"}
        style={{ fontWeight: "bold" }}
      >
        {" "}
        {username}:
      </span>
      <span className={isCyrillic(text) ? "cyrillic-text" : "latin-text"}>
        {" "}
        {text}{" "}
      </span>
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

export { messageManager, userJoined, userTyped };
