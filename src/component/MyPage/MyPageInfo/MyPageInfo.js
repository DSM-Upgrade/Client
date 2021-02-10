import React from "react";
import MyPageFine from "./MyPageFine/MyPageFine";
import MyPageHomework from "./MyPageHomework/MyPageHomework";
import * as S from "./style";

const MyPageInfo = () => {
  return (
    <S.Container>
      <S.InfoBackground>
        <MyPageFine />
        <MyPageHomework />
      </S.InfoBackground>
    </S.Container>
  );
};

export default MyPageInfo;
