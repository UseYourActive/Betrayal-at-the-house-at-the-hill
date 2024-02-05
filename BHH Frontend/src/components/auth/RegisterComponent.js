/* eslint-disable jsx-a11y/anchor-is-valid */
import useRegister from "../../hooks/useRegister";
const RegisterComponent = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    registerUser,
  } = useRegister("users/create");

  const handleRegister = async () => {
    if (username !== "" && password !== "") {
      registerUser();
    } else {
      alert("Ai da ni sa praish i da napishesh i dvete");
    }
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        onChange={handleUsernameChange}
        type="text"
        className="register-input"
        placeholder="Enter your name..."
        maxLength={20}
        minLength={1}
      />
      <input
        onChange={handlePasswordChange}
        type="password"
        className="register-input"
        placeholder="Enter your password..."
        maxLength={20}
        minLength={1}
      />
      <a onClick={handleRegister}>Register</a>
    </div>
  );
};

export default RegisterComponent;
