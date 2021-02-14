import React from "react";
import * as S from "./style";

const FineInfo = (props) => {
  const { name, student_num } = props;

  return (
    <S.Container>
      <S.NameTitle>{`${student_num} ${name}`}</S.NameTitle>
      <S.FineSummary>
        <S.TextWrap>
          <S.GeneralText>미납 :</S.GeneralText>
          <S.ColorText>{3000}</S.ColorText>
          <S.GeneralText>원</S.GeneralText>
        </S.TextWrap>
        <S.TextWrap>
          <S.GeneralText>동아리 총 벌금</S.GeneralText>
          <S.ColorText>{40000}</S.ColorText>
          <S.GeneralText>원 중에서</S.GeneralText>
          <S.ColorText>{10000}</S.ColorText>
          <S.GeneralText>{`원은 ${name}님이 납부하셨습니다.`}</S.GeneralText>
        </S.TextWrap>
      </S.FineSummary>
      <S.FineBox></S.FineBox>
    </S.Container>
  );
};

export default FineInfo;
