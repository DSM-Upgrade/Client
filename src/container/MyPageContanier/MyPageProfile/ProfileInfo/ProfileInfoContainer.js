import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PasswordModal from "../../../../component/Modal/PasswordModal/PasswordModal";
import ProfileInfo from "../../../../component/MyPage/MyPageProfile/ProfileInfo/ProfileInfo";
import { MODAL_ACTION_CREATERS } from "../../../../module/action/modal";

const MyPageInfoContainer = () => {
  const TEMP_DATA = {
    name: "유시온",
    student_num: "3415",
    field: "웹 프론트엔드",
    username: "cutyapple123",
  };
  const FieldsData = [
    {
      id: 1,
      name: "ios",
    },
    {
      id: 2,
      name: "디자인",
    },
    {
      id: 3,
      name: "웹 백엔드",
    },
    {
      id: 4,
      name: "안드로이드",
    },
    {
      id: 5,
      name: "웹 프론트엔드",
    },
  ];

  const [studentNum, setStudentNum] = useState(TEMP_DATA.student_num);
  const [field, setField] = useState(TEMP_DATA.field);

  const onChangeStdNum = useCallback((e) => {
    setStudentNum(e.target.value);
  }, []);
  const studentNumManage = { studentNum, onChangeStdNum };

  const onChangeField = useCallback((e) => {
    setField(e.target.value);
  });
  const fieldManage = { field, FieldsData, onChangeField };

  const { showModal } = MODAL_ACTION_CREATERS;
  const dispatch = useDispatch();
  const modalOn = useCallback(() => {
    dispatch(showModal(PasswordModal));
  }, [dispatch]);

  return (
    <ProfileInfo
      {...TEMP_DATA}
      studentNumManage={studentNumManage}
      fieldManage={fieldManage}
      modalOn={modalOn}
    />
  );
};

export default MyPageInfoContainer;
