import React from "react";

import * as S from "./style";

const ModalWrapper = ({ modalData, modalOff }) => {
  const { isShow, modalElement: Modal } = modalData;

  return (
    <>
      {isShow && (
        <S.Container onClick={modalOff}>{Modal && <Modal />}</S.Container>
      )}
    </>
  );
};

export default ModalWrapper;
