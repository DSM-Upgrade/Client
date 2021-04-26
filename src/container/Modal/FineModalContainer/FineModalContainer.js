import React, { useCallback } from "react";
import FineModal from "../../../component/Modal/FineModal/FineModal";

const FineModalContainer = () => {
  const fineData = [
    {
      reason: "회의 미참여 실화..?",
      price: "10000",
      date: "2021-02-15",
    },
    {
      reason: "3학년이 회의 좀 늦을수도 있지..안그렇니!!!!!!!!!!!!",
      price: "1000",
      date: "2021-02-15",
    },
  ];

  const preventModalOff = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return <FineModal fineData={fineData} preventModalOff={preventModalOff} />;
};

export default FineModalContainer;
