import React from "react";
import { Route, Switch } from "react-router-dom";
import FineContainer from "./container/FineContainer/FineContainer";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/fine" component={FineContainer} />
      </Switch>
    </>
  );
};

export default Routing;
