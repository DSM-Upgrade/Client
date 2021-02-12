import React from "react";
import * as S from "./style";
import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageProfile from "./MyPageProfile/MyPageProfile";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import MyPageAuth from "./MyPageAuth/MyPageAuth";

const MyPage = (props) => {
  const { img, isAdmin } = props;

  return (
    <S.Container>
      <HeaderContainer />
      <S.BackgroundImg img={img}>
        <S.Wrapper>
          <MyPageProfile />
          {isAdmin ? <MyPageAuth /> : <MyPageInfo />}
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default MyPage;
