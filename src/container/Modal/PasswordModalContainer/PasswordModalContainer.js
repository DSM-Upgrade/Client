import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordModal from "../../../component/Modal/PasswordModal/PasswordModal";
import { usePasswordModal } from "../../../hooks/Modal/usePasswordModal";
import { MODAL_ACTION_CREATERS } from "../../../module/action/modal";

const PasswordModalContainer = () => {
  const errorData = useSelector((state) => state.modal.error);

  const { PWInfo, ChangePWInfo, ConfirmPWInfo } = usePasswordModal();

  const { dropModal } = MODAL_ACTION_CREATERS;
  const dispatch = useDispatch();
  const ModalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);

  const PreventModalOff = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <PasswordModal
      errorData={errorData}
      PWInfo={PWInfo}
      ChangePWInfo={ChangePWInfo}
      ConfirmPWInfo={ConfirmPWInfo}
      ModalOff={ModalOff}
      PreventModalOff={PreventModalOff}
    ></PasswordModal>
  );
};

export default PasswordModalContainer;
