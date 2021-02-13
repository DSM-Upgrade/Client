import React from "react";
import { fineBackground } from "../../assets/fine";
import Mypage from "../../component/MyPage/MyPage";

const MyPageContanier = () => {
  const img = fineBackground;
  const isAdmin = true;

  return <Mypage img={img} isAdmin={isAdmin} />;
};

export default MyPageContanier;
