import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeworkCreate from "../../../component/Homework/HomeworkCreate/HomeworkCreate";
import { homeworkActionsCreaters } from "../../../module/action/homework";

const HomeworkCreateContainer = () => {
  const [assignmentObj, setAssignmentObj] = useState({});
  const [usernames, setUserNames] = useState([]);

  const dispatch = useDispatch();

  //userList값 불러오기
  const userList = useSelector((state) => state.homework.userList);

  const { assignmentHomeworkSaga, getUserListSaga } = homeworkActionsCreaters;

  //assignmentHomeworkSaga를 디스패치하는 함수
  const homeworkAssignmentSaga = (Id) => {
    dispatch(assignmentHomeworkSaga(Id));
  };

  //getUserListSaga를 디스패치하는 함수
  const getListUserSaga = () => {
    dispatch(getUserListSaga());
  };

  //체크박스의 값을 받아와 배열에 저장시키는 함수
  const changeHandler = (checked, value) => {
    if (checked) {
      console.log(`checked`);
      setUserNames((arr) => [...arr, value]);
    } else {
      // 체크 해제
      console.log(`Unchecked`);
      setUserNames(usernames.filter((el) => el !== value));
    }
  };

  //인풋들의 값들을 받아오는 함수
  const onChangeFormData = (e) => {
    const { value, name } = e.target;
    setAssignmentObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //인풋들의 내용을 초기화 시켜주는 함수
  const setInputNullfunc = () => {
    setAssignmentObj((prevState) => ({
      ...prevState,
      title: "",
      content: "",
      date: "",
      time: "",
    }));
  };

  //onCLick 이벤트
  const onSubmitEvent = (e) => {
    e.preventDefault();
    homeworkAssignmentSaga(assignmentObj);
    setInputNullfunc();
  };

  useEffect(() => {
    getListUserSaga();
  }, []);
  useEffect(() => {
    setAssignmentObj((e) => ({ ...e, usernames }));
  }, [usernames]);

  return (
    <HomeworkCreate
      onSubmitEvent={onSubmitEvent}
      onChangeFormData={onChangeFormData}
      userList={userList}
      changeHandler={changeHandler}
      assignmentObj={assignmentObj}
    />
  );
};

export default HomeworkCreateContainer;
