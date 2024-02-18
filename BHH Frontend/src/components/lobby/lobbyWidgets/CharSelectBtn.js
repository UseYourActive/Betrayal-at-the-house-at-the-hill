/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useContext } from "react";
import useImage from "../../../hooks/useImage";
import { imgContext } from "../ExplorerSelection";

const CharSelectBtn = ({ color, charName, keyID }) => {
  let { setOnPreview } = useContext(imgContext);
  let imgEndPoint = color + "-" + charName;
  let { currImageSrc } = useImage(imgEndPoint);
  let { allowChoice } = useContext(imgContext);

  const handleClick = (e) => {
    if (allowChoice) {
      setOnPreview(imgEndPoint);
    } else {
    }
  };
  return (
    /*
    <svg
      height="350"
      width="360"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <polygon
        points="150,75 258,137 258,262 150,325 42,262 42,137"
        style={{
          fill: backgroundColor,
          stroke: "purple",
          strokeWidth: "3",
        }}
      />
    </svg>*/
    <a className="explorer-card" key={keyID} onClick={handleClick}>
      <img src={currImageSrc} alt="error" style={{ width: "100%" }} />
    </a>
  );
};

export default CharSelectBtn;
