import React from "react";

import { Route, Switch } from "react-router-dom";

import MyPageContanier from "./container/MyPageContanier/MyPageContanier";
import FineContainer from "./container/FineContainer/FineContainer";
import ModalWrapper from "./component/ModalWrapper/ModalWrapper";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/mypage" component={MyPageContanier} />
        <Route exact path="/fine" component={FineContainer} />
      </Switch>
      <ModalWrapper />
    </>
  );
};

export default Routing;
