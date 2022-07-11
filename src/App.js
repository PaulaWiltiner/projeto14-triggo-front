import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/globalStyle";
import InitialScreen from "./components/InitialScreen";
import Login from "./components/Login";
import Register from "./pages/Register";
import BuySession from "./components/BuySession";
import BuyFinish from "./pages/BuyFinish";
import MainScreen from "./pages/MainScreen";
import UserInfosContext from "./contexts/UserInfosContext";
import { useState } from "react";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [token, setToken] = useState("");
  return (
    <UserInfosContext.Provider
      value={{
        productList,
        setProductList,
        token,
        setToken,
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buy" element={<BuySession />} />
          <Route path="/buyfinish" element={<BuyFinish />} />
          <Route path="/mainscreen" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </UserInfosContext.Provider>
  );
}
