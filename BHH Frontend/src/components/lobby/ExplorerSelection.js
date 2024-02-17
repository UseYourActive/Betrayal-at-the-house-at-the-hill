import PairOfCharView from "./lobbyWidgets/pairOfCharsView";

import ExplorerStats from "./lobbyWidgets/ExplorerStats";
import { createContext, useState } from "react";
import useImage from "../../hooks/useImage";

export const imgContext = createContext();

const ExplorerSelection = () => {
  let [imgPreviewEndPoint, setImgPreviewEndPoint] = useState("yellow-1.png");
  let { currImageSrc } = useImage(imgPreviewEndPoint);
  let [hoveredExplorer, setHoveredExplorer] = useState();
  const setOnPreview = (endPoint) => {
    setImgPreviewEndPoint(endPoint);
  };

  return (
    <imgContext.Provider value={setOnPreview}>
      <div className="explorer-select-container">
        <div className="mini-btn-container">
          <PairOfCharView colorGroup="yellow" />
          <PairOfCharView colorGroup="green" />
          <PairOfCharView colorGroup="blue" />
          <PairOfCharView colorGroup="white" />
          <PairOfCharView colorGroup="purple" />
          <PairOfCharView colorGroup="red" />
        </div>
        <div className="explorer-preview">
          {" "}
          <img
            src={currImageSrc}
            style={{
              width: "75%",
              height: "90%",
            }}
            alt={"none"}
          />
          <ExplorerStats />
        </div>
      </div>
    </imgContext.Provider>
  );
};

export default ExplorerSelection;
