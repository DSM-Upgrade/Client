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
      <input type={"file"} accept=".svg, .png, .jpg" />
    </S.Container>
  );
};

export default ProfileImg;
