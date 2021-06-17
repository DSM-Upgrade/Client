import React from "react";
import * as S from "./style";

const ProfileImg = (props) => {
  const { img } = props;
  const { onUploadProfile } = props;

  return (
    <S.Container>
      <S.ImgBox>
        <S.ImgWrap>
          <S.Img src={img} />
        </S.ImgWrap>
      </S.ImgBox>
      <S.FileBox>
        <S.FileLabel htmlFor="profile_upload">업로드</S.FileLabel>
        <S.ModifyButton
          id="profile_upload"
          type="file"
          accept="image/*"
          onChange={onUploadProfile}
        />
      </S.FileBox>
    </S.Container>
  );
};

export default ProfileImg;
