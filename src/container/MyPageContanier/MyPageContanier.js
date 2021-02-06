import React from "react";
import Mypage from "../../component/MyPage/MyPage";

const MyPageContanier = () => {
  const CONSTANT_DATA = {
    name: "최아린",
    grade: 3,
    class: 4,
    number: 15,
    username: "cutyapple",
    field: {
      id: 1,
      name: "프론트엔드",
    },
    profile: "cutyapple",
  };

  return <Mypage />;
};

export default MyPageContanier;
