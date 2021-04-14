import React from "react";

import { Route, Switch } from "react-router-dom";

import MyPageContanier from "./container/MyPageContanier/MyPageContanier";
import FineContainer from "./container/FineContainer/FineContainer";
import Homework from "./component/Homework/Homework";
import HomeworkDetailView from "./component/Homework/HomeworkDetailView/HomeworkDetailView";
import HomeworkAdmin from "./component/Homework/HomeworkAdmin/HomeworkAdmin";
import HomeworkAdminDetailView from "./component/Homework/HomeworkAdminDetailView/HomeworkAdminDetailView";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/mypage" component={MyPageContanier} />
        <Route exact path="/fine" component={FineContainer} />
        <Route exact path="/homework" component={Homework} />
        <Route exact path="/homeworkDetailView" component={HomeworkDetailView} />
        <Route exact path="/homeworkAdmin" component={HomeworkAdmin} />
        <Route exact path="/homeworkAdminDetailView" component={HomeworkAdminDetailView} />
      </Switch>
      <ModalWrapperContainer />
    </>
  );
};

export default Routing;
