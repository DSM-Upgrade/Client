import React from "react";
import { Route, Switch } from "react-router-dom";
import NoticeContainer from './container/NoticeContainer/NoticeContainer';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route component={NoticeContainer} />
      </Switch>
    </>
  );
};

export default Routing;
