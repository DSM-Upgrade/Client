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
      <S.ModifyButton>수정</S.ModifyButton>
      <input type={"file"} accept="image/*" />
    </S.Container>
  );
};

export default ProfileImg;
