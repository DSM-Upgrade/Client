import React from "react";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileInfoContainer from "../../../container/MyPageContanier/MyPageProfile/ProfileInfo/ProfileInfoContainer";
import * as S from "./style";

const MyPageProfile = () => {
  return (
    <S.Container>
      <ProfileImg />
      <ProfileInfoContainer />
    </S.Container>
  );
};

export default MyPageProfile;
