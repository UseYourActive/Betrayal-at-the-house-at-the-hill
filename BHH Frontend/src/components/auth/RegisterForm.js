/* eslint-disable jsx-a11y/anchor-is-valid */
import useRegister from "../../hooks/useRegister";
const RegisterForm = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    registerUser,
  } = useRegister("/auth/register");

  const handleRegister = async () => {
    if (username.length !== 0 && password.length !== 0) {
      registerUser();
    } else {
      console.log("Greshka si");
    }
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        onChange={(e) => {
          handleUsernameChange(e.target.value);
        }}
        type="text"
        className="register-input"
        placeholder="Enter your name..."
        maxLength={20}
        minLength={1}
      />
      <input
        onChange={(e) => {
          handlePasswordChange(e.target.value);
        }}
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

export default RegisterForm;
