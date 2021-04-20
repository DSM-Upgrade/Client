import React from "react";
import MainContainer from "./container/MainContainer/MainContainer";

import { Route, Switch } from "react-router-dom";

import FineContainer from "./container/FineContainer/FineContainer";
import Homework from "./component/Homework/Homework";
import HomeworkDetailView from "./component/Homework/HomeworkDetailView/HomeworkDetailView";
import HomeworkAdmin from "./component/Homework/HomeworkAdmin/HomeworkAdmin";
import HomeworkAdminDetailView from "./component/Homework/HomeworkAdminDetailView/HomeworkAdminDetailView";
import ModalWrapperContainer from "./container/ModalWrapper/ModalWrapperContainer";
import MyPagePage from "./page/MyPagePage/MyPagePage";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/mypage" component={MyPagePage} />
        <Route exact path="/fine" component={FineContainer} />
        <Route exact path="/homework" component={Homework} />
        <Route
          exact
          path="/homeworkDetailView"
          component={HomeworkDetailView}
        />
        <Route exact path="/homeworkAdmin" component={HomeworkAdmin} />
        <Route
          exact
          path="/homeworkAdminDetailView"
          component={HomeworkAdminDetailView}
        />
      </Switch>
      <ModalWrapperContainer />
    </>
  );
};

export default Routing;
