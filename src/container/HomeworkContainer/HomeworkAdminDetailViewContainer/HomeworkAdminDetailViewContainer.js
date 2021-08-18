import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkAdminDetailView from "../../../component/Homework/HomeworkAdminDetailView/HomeworkAdminDetailView";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkAdminDetailViewContainer = (props) => {
  const { Id, Username, Files, Status, Title, Name } = props.location.state;
  const linkProps = {
    Id: Id,
    Username: Username,
    Files: Files,
    Status: Status,
    Title: Title,
    Name: Name,
  };
  console.log(Files);

  const actionObj = {
    Username: Username,
    Id: Id,
  };

  const dispatch = useDispatch();
  const adminContent = useSelector(
    (state) => state.homework.adminHomeworkContent
  );

  const { getAdminHomeworkContentSaga } = homeworkActionsCreaters;

  const getAdminContentHomeworkSaga = (actionObj) => {
    dispatch(getAdminHomeworkContentSaga(actionObj));
  };

  useEffect(() => {
    getAdminContentHomeworkSaga(actionObj);
  }, []);

  return (
    <HomeworkAdminDetailView
      linkProps={linkProps}
      adminContent={adminContent}
    />
  );
};

export default HomeworkAdminDetailViewContainer;
