import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { MODAL_ACTION_CREATERS } from "../../module/action/modal";

import ModalWrapper from "../../component/ModalWrapper/ModalWrapper";

const ModalWrapperContainer = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal);

  const { dropModal } = MODAL_ACTION_CREATERS;
  const modalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  return <ModalWrapper modalData={modalData} modalOff={modalOff} />;
};

export default ModalWrapperContainer;
