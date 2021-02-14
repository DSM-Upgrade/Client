import React from "react";
import * as S from "./style";

const TitleHeader = (props) => {
  const { firstChar, otherChar } = props;

  return (
    <S.Container>
      <S.FirstChar>{firstChar}</S.FirstChar>
      <S.OtherChar>{otherChar}</S.OtherChar>
    </S.Container>
  );
};

export default TitleHeader;
