import React, { useCallback, useState } from "react";
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

  const allStdData = [
    {
      username: "a",
      name: "유시온",
      student_num: "3415",
      field: "프론트엔드",
    },
    { username: "b", name: "고도현", student_num: "2222", field: "뭘까" },
  ];

  const allStdNameData = allStdData.map((stdData) => stdData.name);

  const [addFineData, setAddFineData] = useState({
    name: allStdNameData[0],
    price: "",
    date: "",
    reason: "",
  });

  const ChangeAddFineData = useCallback((e) => {
    const { name, value } = e.target;

    setAddFineData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <FineAdmin
      fineData={fineData}
      allStdNameData={allStdNameData}
      addFineData={addFineData}
      ChangeAddFineData={ChangeAddFineData}
    />
  );
};

export default FineAdminContainer;
