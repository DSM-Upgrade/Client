import React from "react";
import * as S from "./style";

const ProfileImg = (props) => {
  const { img } = props;

  return (
    <S.Container>
      <S.ImgBox>
        <S.ImgWrap>
          <S.Img src={img} />
        </S.ImgWrap>
      </S.ImgBox>
      <S.FileBox>
        <S.FileLabel htmlFor="file_upload">업로드</S.FileLabel>
        <S.ModifyButton id="file_upload" type="file" accept="image/*" />
      </S.FileBox>
    </S.Container>
  );
};

export default ProfileImg;
