import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalWrapperContainer from "./container/ModalWrapperContainer/ModalWrapperContainer";
import MyPageContanier from "./container/MyPageContanier/MyPageContanier";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/mypage" component={MyPageContanier} />
      </Switch>
      <ModalWrapperContainer />
    </>
  );
};

export default Routing;
