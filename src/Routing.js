import React from "react";
import { Route, Switch } from "react-router-dom";
import NoticeContainer from './container/NoticeContainer/NoticeContainer';
import NoticeWrite from './component/Notice/Admin/NoticeWrite';
import NoticeDetailView from './component/Notice/NoticeDetailView/NoticeDetailView';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route component={NoticeWrite} />
      </Switch>
    </>
  );
};

export default Routing;
