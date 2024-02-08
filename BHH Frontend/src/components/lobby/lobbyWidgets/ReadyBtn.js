import { useState } from "react";

const ReadyBtn = ({ socket }) => {
  const [isReady, setReady] = useState(false);
  const toggleReady = () => {
    setReady(!isReady);
    //  navigate("/game1");
  };

  return (
    <button onClick={toggleReady} style={isReady ? redStyles : greenStyles}>
      {" "}
      {isReady ? "Cancel" : "Ready"}
    </button>
  );
};

export default ReadyBtn;

const greenStyles = {
  backgroundColor: "green",
  color: "black",
};

const redStyles = {
  backgroundColor: "red",
  color: "white",
};
