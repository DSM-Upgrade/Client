import React from "react";
import FineAdmin from "../../../component/Fine/FineAdmin/FineAdmin";

const FineAdminContainer = () => {
  const fineData = [
    {
      name: "고도현",
      reason: "회의 미참여 실화..",
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

  return <FineAdmin fineData={fineData} />;
};

export default FineAdminContainer;
