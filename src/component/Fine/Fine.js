import React from "react";
import * as S from "./style";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";

const Fine = (props) => {
  const { img } = props;

  return (
    <S.Container>
      <HeaderContainer />
      <S.BackgroundImg img={img}>
        <S.Wrapper></S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default Fine;
