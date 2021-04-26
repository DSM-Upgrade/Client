import React from "react";

import { getItem } from "../../utils/LocalStorageUtils";

import { mypageBackground } from "../../assets/mypage";

import Mypage from "../../component/MyPage/MyPage";

const MyPageContanier = () => {
  const backgroundImg = mypageBackground;
  // const isAdmin = getItem("is_admin") ?? false;
  const isAdmin = true;

  return <Mypage backgroundImg={backgroundImg} isAdmin={isAdmin} />;
};

export default MyPageContanier;
