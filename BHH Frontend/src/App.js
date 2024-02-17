import "./styles/index.css";
import "./styles/reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import GamePage from "./pages/GamePage";
import LobbyPage from "./pages/LobbyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Main from "./pages/main";
const router = createBrowserRouter([
  {
    path: "/",
    element: [<Main key="eha" />],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/login",
    element: <LoginPage key="mainLogin" />,

    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/lobby",
    element: <LobbyPage key="main" />,
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/game1",
    element: [<GamePage />],
    errorElement: <p>GRESHKA SI</p>,
  },
  {
    path: "/register",
    element: <RegisterPage key="mainRegister" />,

    errorElement: <p>GRESHKA SI</p>,
  },
]);

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // prevent the default behaviour when right clicked
    console.log("Right Click");
  };

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div className="App" onContextMenu={handleContextMenu}></div>
      </RouterProvider>
    </Provider>
  );
};

export default App;
