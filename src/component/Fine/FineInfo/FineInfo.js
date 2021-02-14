import React from "react";
import * as S from "./style";

const FineInfo = (props) => {
  const { name, student_num, fineData } = props;

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
      <S.FineBox>
        {fineData.map((fine, index) => {
          const { name, reason, price, date, isPay } = fine;
          return (
            <S.FineItem key={index}>
              <S.ItemText>{name}</S.ItemText>
              <S.ItemText>{reason}</S.ItemText>
              <S.ItemText textAlign="right">{price}원</S.ItemText>
              <S.ItemText textAlign="center">{date}</S.ItemText>
              <S.ItemText textAlign="right">
                {isPay ? "입금확인" : "입금미확인"}
              </S.ItemText>
            </S.FineItem>
          );
        })}
      </S.FineBox>
    </S.Container>
  );
};

export default FineInfo;
