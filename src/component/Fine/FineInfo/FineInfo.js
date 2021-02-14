import React from "react";
import * as S from "./style";

const FineInfo = (props) => {
  const { name } = props;

  return (
    <S.Container>
      <S.NameTitle>{name}</S.NameTitle>
    </S.Container>
  );
};

export default FineInfo;
