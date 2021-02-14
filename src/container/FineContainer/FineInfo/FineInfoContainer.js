import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import FineInfo from "../../../component/Fine/FineInfo/FineInfo";
import { MODAL_ACTION_CREATERS } from "../../../module/action/modal";
import FineModalContainer from "../../Modal/FineModalContainer/FineModalContainer";

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

  const { showModal } = MODAL_ACTION_CREATERS;
  const dispatch = useDispatch();
  const modalOn = useCallback(() => {
    dispatch(showModal(FineModalContainer));
  }, [dispatch]);

  return (
    <FineInfo
      name={userData.name}
      student_num={userData.student_num}
      fineData={fineData}
      modalOn={modalOn}
    />
  );
};

export default FineInfoContainer;
