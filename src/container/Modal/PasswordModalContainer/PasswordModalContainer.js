import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordModal from "../../../component/Modal/PasswordModal/PasswordModal";
import { usePasswordModal } from "../../../hooks/Modal/usePasswordModal";
import { MODAL_ACTION_CREATERS } from "../../../module/action/modal";

const PasswordModalContainer = () => {
  const dispatch = useDispatch();
  const errorData = useSelector((state) => state.modal.error);

  const { pwInfo, changePWInfo, confirmPWInfo } = usePasswordModal();

  const { dropModal } = MODAL_ACTION_CREATERS;
  const modalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);

  const preventModalOff = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <PasswordModal
      errorData={errorData}
      pwInfo={pwInfo}
      changePWInfo={changePWInfo}
      confirmPWInfo={confirmPWInfo}
      modalOff={modalOff}
      preventModalOff={preventModalOff}
    ></PasswordModal>
  );
};

export default PasswordModalContainer;
