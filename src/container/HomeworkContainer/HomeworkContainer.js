import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homework from "../../component/Homework/Homework";
import { homeworkActionsCreaters } from "../../module/action/homework";

const HomeworkContainer = () => {
  const dispatch = useDispatch();
  const homeworkData = useSelector((state) => state.homework.homeworkList);

  const [homeworkList, setHomeworkList] = useState({
    ...homeworkData,
  });

  const getHomeworkList = () => {
    dispatch(getHomeworkListSaga());
  };

  useEffect(() => {
    getHomeworkList();
    console.log(homeworkList);
  }, []);

  const { getHomeworkListSaga } = homeworkActionsCreaters;

  return <Homework homeworkList={homeworkList} />;
};

export default HomeworkContainer;
