import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkContent from "../../../component/Homework/HomeworkContent/HomeworkContent";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkContentContainer = (props) => {
  const { Id } = props.location.state;
  const dispatch = useDispatch();
  const linkProps = { Id };

  const homeworkContent = useSelector(
    (state) => state.homework.homeworkContent
  );
  console.log(homeworkContent);

  const { getHomeworkContentSaga } = homeworkActionsCreaters;
  const homeworkContentSaga = (Id) => {
    dispatch(getHomeworkContentSaga(Id));
  };

  useEffect(() => {
    homeworkContentSaga(linkProps.Id);
  }, []);

  return (
    <HomeworkContent linkProps={linkProps} homeworkContent={homeworkContent} />
  );
};

export default HomeworkContentContainer;
