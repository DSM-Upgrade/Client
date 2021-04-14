import React from "react";

import * as S from "./style";

const ModalWrapper = ({ modalData, modalOff }) => {
  const { isShow, modalElement: Modal } = modalData;

  return (
    <>
      {isShow && (
        <S.Container onClick={modalOff} data-testid="modal-wrapper-container">
          {Modal && <Modal />}
        </S.Container>
      )}
    </>
  );
};

export default ModalWrapper;
