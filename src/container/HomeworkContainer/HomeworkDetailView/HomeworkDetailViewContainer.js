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

  /* 파일 선택을 하면 옆에 파일명 뜨게하는 함수 */
  const fileNameInputValue = (e) => {
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
    console.log(returnHomeworkList);
  }

  const onChangeFileHanddler = (e) => {
    console.log(e.target.files);
    const { files, name } = e.target;
    fileNameInputValue(files); //files에 담긴 파일 이름들을 추출하기
    const fileListAsArray = Array.from(files); //객체의 형태인 FileList를 배열로 바꾸기
    setReturnHomeworkList((prevState) => ({
      //returnHomeworkList에 받은 files를 저장
      ...prevState,
      [name]: fileListAsArray,
    }));
  };

  const onChangeFileFormData = (e) => {
    const { value, name } = e.target;
    setReturnHomeworkList((prevState) => ({
      ...prevState,
      [name]: value,
      id: Id,
    }));
  };

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
