import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalWrapperContainer from "./container/ModalWrapperContainer/ModalWrapperContainer";
import MyPageContanier from "./container/MyPageContanier/MyPageContanier";
import FineContainer from "./container/FineContainer/FineContainer";
import Homework from "./container/HomeworkContainer/HomeworkContainer";
import HomeworkDetailView from "./container/HomeworkContainer/HomeworkDetailView/HomeworkDetailViewContainer";
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
