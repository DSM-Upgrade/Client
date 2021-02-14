import React from "react";
import * as S from "./style";

const FineModal = (props) => {
  const { fineData } = props;
  const { PreventModalOff } = props;

  return (
    <S.Container onClick={PreventModalOff}>
      <S.Title>내 벌금내역</S.Title>
      <S.FineBox>
        {fineData.map((fine, index) => {
          const { date, reason, price } = fine;
          return (
            <S.FineItem key={index}>
              <S.ItemText>{date}</S.ItemText>
              <S.ItemText>{reason}</S.ItemText>
              <S.ItemText textAlign="right">{price}원</S.ItemText>
            </S.FineItem>
          );
        })}
      </S.FineBox>
    </S.Container>
  );
};

export default FineModal;
