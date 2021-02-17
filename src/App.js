import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Routing from "./Routing";
import RegisterPage from './component/LoginPage/LoginPage'
import LoginPage from "./component/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <LoginPage />
    </BrowserRouter>
  );
};

export default App;
