import React from "react";
import FineInfo from "../../../component/Fine/FineInfo/FineInfo";

const FineInfoContainer = () => {
  const userData = {
    name: "유시온",
    student_num: "3415",
    username: "사실필요없음",
    field: "이것두..",
  };

  const fineData = [
    {
      name: "고도현",
      reason: "회의 미참여 실화..?",
      price: "10000",
      date: "2021-02-15",
      isPay: false,
    },
    {
      name: "유시온",
      reason: "3학년이 회의 좀 늦을수도 있지..안그렇니!!!!!!!!!!!!",
      price: "1000",
      date: "2021-02-15",
      isPay: true,
    },
  ];

  return (
    <FineInfo
      name={userData.name}
      student_num={userData.student_num}
      fineData={fineData}
    />
  );
};

export default FineInfoContainer;
