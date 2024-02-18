import { useContext } from "react";
import { imgContext } from "../ExplorerSelection";
import ExplorerStats from "./ExplorerStats";

const PlayerChoice = ({ charNameSrc }) => {
  let playerChar = defineChar(charNameSrc);
  let { allowChoice, toggleExplorerChange } = useContext(imgContext);

  let handleClick = () => {
    toggleExplorerChange();
  };
  return (
    <>
      <div className="chosen-character-container">
        <div
          className="player-choice-container"
          style={allowChoice ? null : shownStyles}
        >
          {!allowChoice ? (
            <>
              <h3> Selected Explorer</h3>
              <ExplorerStats charInfo={{ name: playerChar }} />
            </>
          ) : (
            <h1> Choose a character</h1>
          )}
        </div>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: allowChoice ? "green" : "red",
            color: allowChoice ? "black" : "white",
          }}
        >
          {" "}
          {allowChoice ? "SELECT" : "CHANGE"}
          {allowChoice}
        </button>
      </div>
    </>
  );
};

const shownStyles = {
  flexDirection: "column",
};

const defineChar = (imageName) => {
  return imageName
    .split("-")
    .map((char, index) => {
      return index !== 0 ? char : null;
    })
    .join(" ");
};

export default PlayerChoice;
