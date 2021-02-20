import React from "react";
import * as S from "./style";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";

const Homework = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <TitleHeaderContainer text="Homework" />
        <S.Wrapper>
          
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default Homework;
