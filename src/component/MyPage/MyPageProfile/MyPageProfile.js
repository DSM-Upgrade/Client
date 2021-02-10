import React from "react";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileInfoContainer from "../../../container/MyPageContanier/MyPageProfile/ProfileInfo/ProfileInfoContainer";
import * as S from "./style";

const Profile = () => {
  return (
    <S.Container>
      <ProfileImg />
      <ProfileInfoContainer />
    </S.Container>
  );
};

export default Profile;
