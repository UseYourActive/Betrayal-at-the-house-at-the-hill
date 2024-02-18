import PairOfCharView from "./lobbyWidgets/pairOfCharsView";

import ExplorerStats from "./lobbyWidgets/ExplorerStats";
import { createContext, useState } from "react";
import useImage from "../../hooks/useImage";
import PlayerChoice from "./lobbyWidgets/PlayerChoice";

export const imgContext = createContext();

const ExplorerSelection = () => {
  let [imgPreviewEndPoint, setImgPreviewEndPoint] = useState(
    "yellow-Missy-Dubourde"
  );
  let [allowChoice, setAllowChoice] = useState(true);
  let { currImageSrc } = useImage(imgPreviewEndPoint);
  // let [hoveredExplorer, setHoveredExplorer] = useState();
  const setOnPreview = (endPoint) => {
    setImgPreviewEndPoint(endPoint);
  };
  let toggleExplorerChange = () => {
    console.log(5);
    setAllowChoice(!allowChoice);
  };

  return (
    <imgContext.Provider
      value={{ setOnPreview, allowChoice, toggleExplorerChange }}
    >
      <div className="explorer-select-container" key="esc">
        <div
          className="mini-btn-container"
          key="mbc"
          style={{ opacity: allowChoice ? 1 : 0.25 }}
        >
          <PairOfCharView colorGroup="yellow" />
          <PairOfCharView colorGroup="green" />
          <PairOfCharView colorGroup="blue" />
          <PairOfCharView colorGroup="white" />
          <PairOfCharView colorGroup="purple" />
          <PairOfCharView colorGroup="red" />
        </div>
        <div className="explorer-preview-container">
          {" "}
          <img
            src={currImageSrc}
            style={{ opacity: allowChoice ? 1 : 0.25 }}
            alt={currImageSrc}
          />
          <ExplorerStats />
        </div>
        <PlayerChoice charNameSrc={imgPreviewEndPoint} />
      </div>
    </imgContext.Provider>
  );
};

export default ExplorerSelection;
