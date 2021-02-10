import React from "react";
import * as S from "./style";

const MyPageFine = () => {
  const fines = [
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
    {
      fine_id: 1,
      fine_reason: "지각",
      fine_date: "2021-1-26",
      fine: 3000,
    },
    {
      fine_id: 2,
      fine_reason: "꿀잠",
      fine_date: "2021-2-11",
      fine: 2000,
    },
  ];
  const sumOfFine = fines.length
    ? fines.reduce((pre, cur) => pre + cur.fine, 0)
    : 0;

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
