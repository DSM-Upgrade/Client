import React from "react";
import * as S from "./style";
import ProfileInfoContainer from "../../../container/MyPageContanier/MyPageProfile/ProfileInfo/ProfileInfoContainer";
import ProfileImgContainer from "../../../container/MyPageContanier/MyPageProfile/ProfileImg/ProfileImgContainer";

const MyPageProfile = () => {
  return (
    <S.Container>
      <ProfileImgContainer />
      <ProfileInfoContainer />
    </S.Container>
  );
};

export default MyPageProfile;
