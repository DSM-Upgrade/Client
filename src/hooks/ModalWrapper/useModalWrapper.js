import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { MODAL_ACTION_CREATERS } from "../../module/action/modal";

export const useModalWrapper = () => {
  const { dropModal } = MODAL_ACTION_CREATERS;
  const modalData = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  return { modalData, ModalOff };
};
