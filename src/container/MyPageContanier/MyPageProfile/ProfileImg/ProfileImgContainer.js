import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { tempProfileImg } from "../../../../assets/mypage/index";

import { loginUserActionCreaters } from "../../../../module/action/loginUser";

import ProfileImg from "../../../../component/MyPage/MyPageProfile/ProfileImg/ProfileImg";

const ProfileImgContainer = () => {
  const dispatch = useDispatch();
  const { profile_image_name } = useSelector(
    (state) => state.loginUser.userInfo
  );

  const REACT_APP_IMG_BASE_URL = process.env.REACT_APP_IMG_BASE_URL;
  const profileURL = REACT_APP_IMG_BASE_URL + profile_image_name;

  const { modifyProfileSaga } = loginUserActionCreaters;

  const modifyProfile = (file) => {
    dispatch(modifyProfileSaga({ file }));
  };
  const onRemoveProfile = () => {
    dispatch(modifyProfileSaga({ file: tempProfileImg }));
  };

  const onUploadProfile = (e) => {
    modifyProfile(e.target.files[0]);
  };

  return (
    <ProfileImg
      img={profile_image_name === undefined ? tempProfileImg : profileURL}
      onUploadProfile={onUploadProfile}
      onRemoveProfile={onRemoveProfile}
    />
  );
};

export default ProfileImgContainer;
