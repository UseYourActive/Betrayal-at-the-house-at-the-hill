import React from "react";
import "./styles/index.css";
import "./styles/reset.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import GamePage from "./pages/GamePage";
import LobbyPage from "./pages/LobbyPage";
import VideoComponent from "./components/background/VideoComponent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Main from "./pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Main />],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/login",
    element: [
      <VideoComponent key="loginBckg" />,
      <LoginPage key="mainLogin" />,
    ],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/lobby",
    element: [<VideoComponent key="lobbyBckg" />, <LobbyPage key="main" />],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/game1",
    element: [<GamePage />],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/register",
    element: [
      <VideoComponent key="registerBckg" />,
      <RegisterPage key="mainRegister" />,
    ],
    errorElement: <p>GRESHKA SI</p>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
