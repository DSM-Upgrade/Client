import React from "react";

import * as S from "./style";

import { useModalWrapper } from "../../hooks/ModalWrapper/useModalWrapper";

const ModalWrapper = () => {
  const {
    modalData: { isShow, modalElement: Modal },
    ModalOff,
  } = useModalWrapper();

  return (
    <>
      {isShow && (
        <S.Container onClick={ModalOff}>{Modal && <Modal />}</S.Container>
      )}
    </>
  );
};

export default ModalWrapper;
