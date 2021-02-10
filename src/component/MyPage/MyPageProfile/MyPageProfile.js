import React from "react";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import * as S from "./style";

const Profile = () => {
  return (
    <S.Container>
      <ProfileImg />
      <ProfileInfo />
    </S.Container>
  );
};

export default Profile;
