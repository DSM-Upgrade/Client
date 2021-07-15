import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkAdmin from "../../../component/Homework/HomeworkAdmin/HomeworkAdmin";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkAdminContainer = () => {
  const dispatch = useDispatch();

  const adminList = useSelector((state) => state.homework.adminHomeworkList);

  const { getAdminHomeworkListSaga } = homeworkActionsCreaters;

  const getHomeworkAdminList = () => {
    dispatch(getAdminHomeworkListSaga());
  };

  useEffect(() => {
    getHomeworkAdminList();
  }, []);

  return <HomeworkAdmin adminList={adminList} />;
};

export default HomeworkAdminContainer;
