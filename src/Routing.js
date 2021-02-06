import React from "react";
import { Route, Switch } from "react-router-dom";
import MyPageContanier from "./container/MyPageContanier/MyPageContanier";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/mypage" component={MyPageContanier} />
      </Switch>
    </>
  );
};

export default Routing;
