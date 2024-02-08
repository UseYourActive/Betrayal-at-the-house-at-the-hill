import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="main">
      <h1>
        Be<span className="span">t</span>rayal <span className="span">a</span>t
        Ho
        <span className="span">u</span>se o<span className="span">n</span> the{" "}
        <span className="span">H</span>
        ill
      </h1>
      <div className="centered-container">
        <div className="header">
          <i className="fa-solid fa-ghost left-icon"></i>
          <h3>Login</h3>
          <i className="fa-solid fa-ghost right-icon"></i>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
