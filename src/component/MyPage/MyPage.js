import React from "react";
import { fineBackground } from "../../assets/fine";
import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageProfile from "./MyPageProfile/MyPageProfile";
import * as S from "./style";

const MyPage = () => {
  return (
    <S.Container>
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
