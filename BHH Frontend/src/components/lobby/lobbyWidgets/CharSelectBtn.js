import React from "react";
const CharSelectBtn = ({ backgroundColor, handleClick }) => {
  return (
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
    </svg>
  );
};

export default CharSelectBtn;
