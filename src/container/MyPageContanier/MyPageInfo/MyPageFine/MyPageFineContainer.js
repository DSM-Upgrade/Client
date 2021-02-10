import React from "react";
import MyPageFine from "../../../../component/MyPage/MyPageInfo/MyPageFine/MyPageFine";

const MyPageFineContainer = () => {
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

  return <MyPageFine fines={fines} sumOfFine={sumOfFine} />;
};

export default MyPageFineContainer;
