import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { tempProfileImg } from "../../../../assets/mypage/index";

import { loginUserActionCreaters } from "../../../../module/action/loginUser";

import ProfileImg from "../../../../component/MyPage/MyPageProfile/ProfileImg/ProfileImg";

const ProfileImgContainer = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.loginUser);

  const { modifyProfileSaga } = loginUserActionCreaters;

  const modifyProfile = (file) => {
    dispatch(modifyProfileSaga({ file }));
  };

  const onUploadProfile = (e) => {
    console.log(1);
    modifyProfile(e.target.files[0]);
  };

  return (
    <ProfileImg
      img={profile ?? tempProfileImg}
      onUploadProfile={onUploadProfile}
    />
  );
};

export default ProfileImgContainer;
