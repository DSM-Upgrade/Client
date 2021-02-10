import React from "react";
import ProfileInfo from "../../../../component/MyPage/MyPageProfile/ProfileInfo/ProfileInfo";

const MyPageInfoContainer = () => {
  const TEMP_DATA = {
    name: "유시온",
    student_num: "3415",
    field: "프론트엔드",
    username: "cutyapple123",
  };

  return <ProfileInfo {...TEMP_DATA} />;
};

export default MyPageInfoContainer;
