import React from "react";
import * as S from "./style";
import { tempProfileImg } from "../../../../assets/mypage/index";

const ProfileImg = () => {
  const img = tempProfileImg;

  return (
    <S.Container>
      <S.ImgBox>
        <S.ImgWrap>
          <S.Img src={img} />
        </S.ImgWrap>
      </S.ImgBox>
      <S.ModifyButton>수정</S.ModifyButton>
      <input type={"file"} accept="image/*" />
    </S.Container>
  );
};

export default ProfileImg;
