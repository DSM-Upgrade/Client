import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Routing from "./Routing";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <Header />
    </BrowserRouter>
  );
};

export default App;
