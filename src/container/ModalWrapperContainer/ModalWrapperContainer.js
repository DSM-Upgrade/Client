import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_ACTION_CREATERS } from "../../module/action/modal";
import ModalWrapper from "../../component/ModalWrapper/ModalWrapper";

const ModalWrapperContainer = () => {
  const { dropModal } = MODAL_ACTION_CREATERS;
  const modalData = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  return <ModalWrapper modalData={modalData} ModalOff={ModalOff} />;
};

export default ModalWrapperContainer;
