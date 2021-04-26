import React from "react";

import * as S from "./style";

const ProfileImg = (props) => {
  const { img } = props;
  const { onUploadProfile, onRemoveProfile } = props;

  return (
    <S.Container>
      <S.ImgBox>
        <S.ImgWrap>
          <S.Img src={img} />
        </S.ImgWrap>
      </S.ImgBox>
      <S.FileBox>
        <S.FileInputWrap>
          <S.FileLabel htmlFor="profile_upload">이미지 업로드</S.FileLabel>
          <S.ModifyButton
            id="profile_upload"
            type="file"
            accept="image/*"
            onChange={onUploadProfile}
          />
        </S.FileInputWrap>
        <S.RemoveButton onClick={onRemoveProfile}>이미지 삭제</S.RemoveButton>
      </S.FileBox>
    </S.Container>
  );
};

export default ProfileImg;
