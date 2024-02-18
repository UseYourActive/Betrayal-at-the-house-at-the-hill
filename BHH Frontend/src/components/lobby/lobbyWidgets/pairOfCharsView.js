import { explorers } from "../../../data/explorersList";
import CharSelectBtn from "./CharSelectBtn";

const PairOfCharView = ({ colorGroup }) => {
  return (
    <>
      <h2 className="color-name-heading" key={colorGroup + "-heading"}>
        {" "}
        {colorGroup}
      </h2>
      <div
        key={colorGroup}
        className="explorer-pair-container"
        style={{ backgroundColor: colorGroup }}
      >
        {explorers[colorGroup].map((explorer, index) => {
          return (
            <>
              <CharSelectBtn
                keyID={colorGroup + "-" + index}
                color={colorGroup}
                charName={explorer}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PairOfCharView;
