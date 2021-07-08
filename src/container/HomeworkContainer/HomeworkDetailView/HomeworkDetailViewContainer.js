import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkDetailView from "../../../component/Homework/HomeworkDetailView/HomeworkDetailView";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkDetailViewContainer = (props) => {
  const { Id, Title, CreatedAt, Deadline } = props.location.state;
  const linkProps = {
    Id: Id,
    Title: Title,
    CreatedAt: CreatedAt,
    Deadline: Deadline,
  };
  const dispatch = useDispatch();
  const Name = [];
  const [fileInputName, setFileInputName] = useState([]);
  const returnHomeworkData = useSelector(
    (state) => state.homework.state.returnHomework
  );

  const [returnHomeworkList, setReturnHomeworkList] = useState({
    ...returnHomeworkData,
  });

  const fileNameInputValue = (e) => {
    /* 파일 선택을 하면 옆에 파일명 뜨게하는 함수 */
    for (let index = 0; index < e.length; index++) {
      Name[index] = e[index].name;
    }
    const fileNameString =
      `${Name}` + " " + `${Name.length}개 파일이 추가되었습니다.`;
    setFileInputName(fileNameString);
    console.log(fileNameString);
  };

  const { returnHomeworkSaga } = homeworkActionsCreaters;

  const returnHomeworkInfo = (returnHomeworkData) => {
    dispatch(returnHomeworkSaga(returnHomeworkData));
  };

  function onSubmitHanddler(e) {
    e.preventDefault();
    returnHomeworkInfo(returnHomeworkList);
  }

  const onChangeFileHanddler = (e) => {
    console.log(e.target.files);
    const { files, name } = e.target;
    fileNameInputValue(files);
    setReturnHomeworkList((prevState) => ({
      ...prevState,
      [name]: files,
    }));
    console.log(returnHomeworkList);
  };

  const onChangeFileFormData = (e) => {
    const { value, name } = e.target;
    setReturnHomeworkList((prevState) => ({
      ...prevState,
      [name]: value,
      id: Id,
    }));
    console.log(returnHomeworkList);
  };

  console.log(linkProps);

  return (
    <HomeworkDetailView
      linkProps={linkProps}
      fileInputName={fileInputName}
      onSubmitHanddler={onSubmitHanddler}
      onChangeFileHanddler={onChangeFileHanddler}
      onChangeFileFormData={onChangeFileFormData}
    />
  );
};

export default HomeworkDetailViewContainer;
