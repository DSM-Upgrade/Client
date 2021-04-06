import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalWrapperContainer from "./container/ModalWrapperContainer/ModalWrapperContainer";
import MyPageContanier from "./container/MyPageContanier/MyPageContanier";
import FineContainer from "./container/FineContainer/FineContainer";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/mypage" component={MyPageContanier} />
        <Route exact path="/fine" component={FineContainer} />
      </Switch>
      <ModalWrapperContainer />
    </>
  );
};

export default Routing;
