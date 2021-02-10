import React from "react";
import { Switch,Route } from "react-router-dom";
import MainContainer from "./container/MainContainer/MainContainer";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route component={MainContainer}/>
      </Switch>
    </>
  );
};

export default Routing;
