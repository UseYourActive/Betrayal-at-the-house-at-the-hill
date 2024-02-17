/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useContext, useState } from "react";
import useImage from "../../../hooks/useImage";
import { imgContext } from "../ExplorerSelection";

const CharSelectBtn = ({ charSrc, colorId }) => {
  let focusImg = useContext(imgContext);
  let imgEndPoint = charSrc + colorId + ".png";
  let { currImageSrc } = useImage(imgEndPoint);

  const handleClick = () => {
    focusImg(imgEndPoint);
  };
  const clearHovering = () => {
    console.log("triggered blur");
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
    <a className="explorer-card" onClick={handleClick} onBlur={clearHovering}>
      <img src={currImageSrc} alt="error" style={{ width: "100%" }} />
    </a>
  );
};

export default CharSelectBtn;
