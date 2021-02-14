import React from "react";
import FineInfo from "../../../component/Fine/FineInfo/FineInfo";

const FineInfoContainer = () => {
  const userData = {
    name: "유시온",
    student_num: "3415",
    username: "사실필요없음",
    field: "이것두..",
  };

  return <FineInfo nameTitle={`${userData.student_num} ${userData.name}`} />;
};

export default FineInfoContainer;
