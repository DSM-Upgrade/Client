import React from "react";
import * as S from "./style";
import { fineBackground } from "../../assets/fine";
import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageProfile from "./MyPageProfile/MyPageProfile";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";

const MyPage = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.BackgroundImg img={fineBackground}>
        <S.Wrapper>
          <MyPageProfile />
          <MyPageInfo />
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default MyPage;
