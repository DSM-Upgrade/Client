import React from "react";
import * as S from "./style";

const FineAdmin = (props) => {
  const { fineData } = props;

  return (
    <S.Container>
      <S.NameTitle>벌금 추가</S.NameTitle>
      <S.AddFine>
        <S.TempGridWrap>
          <S.TempFlexWrap>
            <S.AddFineLabel htmlFor="add_fine_input_name">대상</S.AddFineLabel>
            <S.AddFineInput type="text" id="add_fine_input_name" />
          </S.TempFlexWrap>
          <S.TempFlexWrap>
            <S.AddFineLabel htmlFor="add_fine_input_price">금액</S.AddFineLabel>
            <S.AddFineInput type="text" id="add_fine_input_price" />
          </S.TempFlexWrap>
          <S.TempFlexWrap>
            <S.AddFineLabel htmlFor="add_fine_input_date">날짜</S.AddFineLabel>
            <S.AddFineInput type="date" id="add_fine_input_date" />
          </S.TempFlexWrap>
        </S.TempGridWrap>
        <S.TempFlexWrap>
          <S.AddFineLabel htmlFor="add_fine_input_text">사유</S.AddFineLabel>
          <S.AddFineInput type="text" id="add_fine_input_text" />
        </S.TempFlexWrap>
      </S.AddFine>
      <S.FineBox>
        {fineData.map((fine, index) => {
          const { name, reason, price, date } = fine;
          return (
            <S.FineItem key={index}>
              <S.ItemText>{name}</S.ItemText>
              <S.ItemText>{reason}</S.ItemText>
              <S.ItemText textAlign="right">{price}원</S.ItemText>
              <S.ItemText textAlign="center">{date}</S.ItemText>
              <S.ItemButton>입금확인</S.ItemButton>
            </S.FineItem>
          );
        })}
      </S.FineBox>
    </S.Container>
  );
};

export default FineAdmin;
