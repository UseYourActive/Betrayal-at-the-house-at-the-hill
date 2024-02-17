import CharSelectBtn from "./CharSelectBtn";

const PairOfCharView = ({ colorGroup }) => {
  return (
    <>
      <div className="explorer-pair-container">
        <CharSelectBtn charSrc={colorGroup} colorId={"-1"} />
        <CharSelectBtn charSrc={colorGroup} colorId={"-2"} />
      </div>
    </>
  );
};

export default PairOfCharView;
