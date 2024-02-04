import useFetch from "../hooks/useFetch";

const PlayerListComponent = () => {
  return (
    <div
      className="playerList"
      style={{
        backgroundColor: "blue",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Players:</h1>
      <ul
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>Player1</li>
        <li>Player2</li>
        <li>Player3</li>
        <li>Player4</li>
      </ul>
    </div>
  );
};

export default PlayerListComponent;
