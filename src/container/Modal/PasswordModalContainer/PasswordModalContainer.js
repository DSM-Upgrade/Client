import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { areEqual } from "../../../utils/parameterUtils";

import { authActionCreaters } from "../../../module/action/auth";
import { modalActionCreaters } from "../../../module/action/modal";

import { usePasswordModal } from "../../../hooks/Modal/usePasswordModal";

import PasswordModal from "../../../component/Modal/PasswordModal/PasswordModal";

const PasswordModalContainer = () => {
  const dispatch = useDispatch();
  const errorData = useSelector((state) => state.modal.error);

  const { passwordInfo, changePasswordInfo } = usePasswordModal();

  const { dropModal } = modalActionCreaters;
  const { changePasswordSaga } = authActionCreaters;

  const changePassword = (nowPassword, newPassword) => {
    dispatch(changePasswordSaga({ nowPassword, newPassword }));
  };
  const modalOff = () => {
    dispatch(dropModal());
  };

  const vaildPassword = () => {
    const { newPassword, reEnterPassword } = passwordInfo;

    if (!areEqual(newPassword, reEnterPassword)) {
      alert("새 비밀번호 확인 칸이 일치하지 않습니다.");
      return false;
    }

    return true;
  };
  const onSubmitPassword = () => {
    const { nowPassword, newPassword } = passwordInfo;

    vaildPassword() && changePassword(nowPassword, newPassword);
  };
  const preventModalOff = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <PasswordModal
      errorData={errorData}
      passwordInfo={passwordInfo}
      modalOff={modalOff}
      preventModalOff={preventModalOff}
      onSubmitPassword={onSubmitPassword}
      changePasswordInfo={changePasswordInfo}
    />
  );
};

export default PasswordModalContainer;
