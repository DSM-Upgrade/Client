import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkContent from "../../../component/Homework/HomeworkContent/HomeworkContent";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkContentContainer = (props) => {
  const { Id } = props.location.state;
  const [isLoading, setIsLoading] = useState(true);
  const linkProps = { Id };

  const homeworkContent = useSelector(
    (state) => state.homework.homeworkContent
  );
  const isLoadingHomework = useSelector(
    (state) => state.homework.isLoadingHomework
  );

  const dispatch = useDispatch();

  const { getHomeworkContentSaga } = homeworkActionsCreaters;
  const homeworkContentSaga = (Id) => {
    dispatch(getHomeworkContentSaga(Id));
  };

  useEffect(() => {
    homeworkContentSaga(linkProps.Id);
    setIsLoading(isLoadingHomework);
  }, []);

  return (
    <HomeworkContent
      linkProps={linkProps}
      homeworkContent={homeworkContent}
      isLoading={isLoading}
    />
  );
};

export default HomeworkContentContainer;
