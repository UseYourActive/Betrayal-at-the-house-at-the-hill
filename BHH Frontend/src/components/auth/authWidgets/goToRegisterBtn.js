/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useNavigate } from "react-router-dom";

const RedirectToRegisterBtn = () => {
  let navigate = useNavigate();
  return (
    <a
      className="regButton"
      onClick={() => {
        navigate("/register");
      }}
    >
      {" "}
      Register{" "}
    </a>
  );
};

export default RedirectToRegisterBtn;
