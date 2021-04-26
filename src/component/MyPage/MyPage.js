import React from "react";

import * as S from "./style";

import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageProfile from "./MyPageProfile/MyPageProfile";
import MyPageAuthContainer from "../../container/MyPageContanier/MyPageAuth/MyPageAuthContainer";

const MyPage = (props) => {
  const { backgroundImg, isAdmin } = props;

  return (
    <S.Container>
      <S.BackgroundImg img={backgroundImg}>
        <S.Wrapper>
          <MyPageProfile />
          {isAdmin ? <MyPageAuthContainer /> : <MyPageInfo />}
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default MyPage;
