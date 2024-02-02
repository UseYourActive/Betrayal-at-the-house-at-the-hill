import React from "react";
import "./styles/index.css";
import "./styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LobbyComponent from "./components/LobbyComponent";
import store from "./store/store";
import VideoComponent from "./components/VideoComponent";
import GamePage from "./pages/GamePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: [<VideoComponent />, <LobbyComponent />],
    errorElement: <p>Ehohoho</p>,
  },
  {
    path: "/game1",
    element: [<GamePage />],
    errorElement: <p>Ehohoho</p>,
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
