import React from "react";
import * as S from "./style";

const TitleHeader = (props) => {
  const { firstChar, otherChar } = props;

  return (
    <S.Container>
      <S.FirstChar>{firstChar?.current}</S.FirstChar>
      {otherChar?.current?.length && (
        <S.OtherChar>{otherChar?.current}</S.OtherChar>
      )}
    </S.Container>
  );
};

export default TitleHeader;
