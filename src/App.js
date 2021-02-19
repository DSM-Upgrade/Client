import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Routing from "./Routing";
import Homework from "./component/Homework/Homework";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
      <Homework />
    </BrowserRouter>
  );
};

export default App;
