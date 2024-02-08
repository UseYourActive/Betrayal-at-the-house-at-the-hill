import CharSelectBtn from "./lobbyWidgets/CharSelectBtn";

const ExplorerSelection = () => {
  const print50 = (number) => {
    console.log(number);
  };
  return (
    <div className="explorer-select-container">
      <CharSelectBtn
        backgroundColor="yellow"
        handleClick={() => {
          print50(40);
        }}
      />
      <CharSelectBtn
        backgroundColor="green"
        handleClick={() => {
          print50(50);
        }}
      />
      <button style={{ backgroundColor: "green" }}>G</button>
      <button style={{ backgroundColor: "red" }}>R</button>
      <button style={{ backgroundColor: "purple" }}>P</button>
      <button style={{ backgroundColor: "blue", color: "white" }}>B</button>
    </div>
  );
};

export default ExplorerSelection;
