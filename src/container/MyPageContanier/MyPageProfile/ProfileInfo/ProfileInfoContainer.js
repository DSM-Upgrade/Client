import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { areEqual } from "../../../../utils/parameterUtils";

import { modalActionCreaters } from "../../../../module/action/modal";
import { loginUserActionCreaters } from "../../../../module/action/loginUser";

import ProfileInfo from "../../../../component/MyPage/MyPageProfile/ProfileInfo/ProfileInfo";
import PasswordModalContainer from "../../../Modal/PasswordModalContainer/PasswordModalContainer";

const ProfileInfoContainer = () => {
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.field);
  const loginUserData = useSelector((state) => state.loginUser.userInfo);

  const [isChange, setIsChange] = useState(false);
  const [userData, setUserData] = useState({
    ...loginUserData,
  });

  const { showModal } = modalActionCreaters;
  const { setStdInfo, modifyStdInfoSaga } = loginUserActionCreaters;

  const modalOn = () => {
    dispatch(showModal(PasswordModalContainer));
  };
  const setLoginUserData = (updateData) => {
    dispatch(setStdInfo(updateData));
  };
  const modifyStdInfo = (changedStdInfo) => {
    dispatch(modifyStdInfoSaga(changedStdInfo));
  };

  const onModifyClick = () => {
    const {
      student_num,
      field: { id: field_id },
    } = userData;

    setIsChange(false);
    setLoginUserData(userData);
    modifyStdInfo({ student_num, field_id });
  };
  const onChangeUserData = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserData(loginUserData);
  }, [loginUserData]);
  useEffect(() => {
    setIsChange(!areEqual(userData, loginUserData));
  }, [userData, loginUserData]);

  return (
    <ProfileInfo
      fields={fields}
      isChange={isChange}
      userData={userData}
      modalOn={modalOn}
      onModifyClick={onModifyClick}
      onChangeUserData={onChangeUserData}
    />
  );
};

export default ProfileInfoContainer;
