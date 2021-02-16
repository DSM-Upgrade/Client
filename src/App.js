import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Routing from "./Routing";
import RegisterPage from './component/RegisterPage/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <RegisterPage />
    </BrowserRouter>
  );
};

export default App;
