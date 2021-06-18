import React from "react";
import MainContainer from "./container/MainContainer/MainContainer";

import { Route, Switch } from "react-router-dom";

import FineContainer from "./container/FineContainer/FineContainer";
import Homework from "./container/HomeworkContainer/HomeworkContainer";
import HomeworkDetailView from "./container/HomeworkContainer/HomeworkDetailView/HomeworkDetailViewContainer";
import HomeworkAdmin from "./container/HomeworkContainer/HomeworkAdminContainer/HomeworkAdminContainer";
import HomeworkAdminDetailView from "./container/HomeworkContainer/HomeworkAdminDetailViewContainer/HomeworkAdminDetailViewContainer";
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
