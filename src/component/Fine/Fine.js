import React from "react";
import * as S from "./style";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";
import FineInfoContainer from "../../container/FineContainer/FineInfo/FineInfoContainer";

const Fine = (props) => {
  const { img } = props;

  return (
    <S.Container>
      <HeaderContainer />
      <S.BackgroundImg img={img}>
        <S.Wrapper>
          <TitleHeaderContainer text="Fine" />
          <FineInfoContainer />
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default Fine;
