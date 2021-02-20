import React from "react";
import { Route, Switch } from "react-router-dom";
import NoticeContainer from './container/NoticeContainer/NoticeContainer';
import NoticeDetailView from './component/Notice/NoticeDetailView/NoticeDetailView';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route component={NoticeDetailView} />
      </Switch>
    </>
  );
};

export default Routing;
