import React from "react";
import * as S from "./style";

const MyPageFine = (props) => {
  const { fines, sumOfFine } = props;

  return (
    <S.Container>
      <S.Title>미납 벌금</S.Title>
      <S.SubTitle>
        {sumOfFine ? `총합 ${sumOfFine}원` : `낼 벌금이 없으시네요!`}
      </S.SubTitle>
      <S.FineBox>
        {fines.length
          ? fines.map(
              ({ fine_id: id, fine_reason: reason, fine_date: date, fine }) => (
                <S.FineItem
                  key={id}
                >{`${date} - ${reason} - ${fine}`}</S.FineItem>
              )
            )
          : ""}
      </S.FineBox>
    </S.Container>
  );
};

export default MyPageFine;
