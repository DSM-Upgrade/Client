import React from "react";
import * as S from "./style";

const FineInfo = (props) => {
  const { nameTitle } = props;

  return (
    <S.Container>
      <S.NameTitle>{nameTitle}</S.NameTitle>
    </S.Container>
  );
};

export default FineInfo;
