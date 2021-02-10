import React from "react";
import { fineBackground } from "../../assets/fine";
import MyPageFine from "./MyPageFine/MyPageFine";
import MyPageProfile from "./MyPageProfile/MyPageProfile";
import * as S from "./style";

const MyPage = (props) => {
  const { data } = props;

  return (
    <S.Container>
      <S.BackgroundImg img={fineBackground}>
        <S.Wrapper>
          <MyPageProfile />
          <MyPageFine />
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default MyPage;
