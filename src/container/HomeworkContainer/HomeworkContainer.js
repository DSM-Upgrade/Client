import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homework from "../../component/Homework/Homework";
import { homeworkActionsCreaters } from "../../module/action/homework";

const HomeworkContainer = () => {
  const dispatch = useDispatch();
  const { getHomeworkListSaga } = homeworkActionsCreaters;

  const homeworkList = useSelector((state) => state.homework.homeworkList);

  const getHomeworkList = () => {
    dispatch(getHomeworkListSaga());
  };

  useEffect(() => {
    getHomeworkList();
  }, []);

  return <Homework homeworkList={homeworkList} />;
};

export default HomeworkContainer;
