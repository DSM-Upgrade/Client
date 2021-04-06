import React from "react";
import { mypageBackground } from "../../assets/mypage";
import Mypage from "../../component/MyPage/MyPage";

const MyPageContanier = () => {
  const img = mypageBackground;
  const isAdmin = true;

  return <Mypage img={img} isAdmin={isAdmin} />;
};

export default MyPageContanier;
