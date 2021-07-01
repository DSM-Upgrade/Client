import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homework from "../../component/Homework/Homework";
import { homeworkActionsCreaters } from "../../module/action/homework";

const homeworkTestList = [
  {
    id: 1,
    title: "숙제 제목",
    createdAt: "숙제 등록한 날짜",
    deadline: "숙제 기한 날짜",
    content: "숙제 내용",
    status: "ASSIGNED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
  },
  {
    id: 2,
    title: "숙제 제목",
    createdAt: "숙제 등록한 날짜",
    deadline: "숙제 기한 날짜",
    content: "숙제 내용",
    status: "ASSIGNED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
  },
];

const HomeworkContainer = () => {
  const dispatch = useDispatch();
  const { getHomeworkListSaga } = homeworkActionsCreaters;
  const homeworkData = useSelector(
    (state) => state.homework.state.homeworkList
  ); //서버에서 데이터 안왔을 때
  const homeworkList = useSelector((state) => state.homework.homeworkList); //왔을때

  const getHomeworkList = () => {
    dispatch(getHomeworkListSaga());
  };

  useEffect(() => {
    getHomeworkList();
  }, []);

  return <Homework homeworkList={homeworkList} />;
};

export default HomeworkContainer;
