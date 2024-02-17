import isCyrillic from "../../../utils/isCyrillic";

const TextHeader = ({ username }) => {
  return (
    <>
      <h1 className="textHeader">Game Lobby</h1>
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
    </>
  );
};

export default TextHeader;
