import React from "react";
import * as S from "./style";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";
import FineInfoContainer from "../../container/FineContainer/FineInfo/FineInfoContainer";
import FineAdminContainer from "../../container/FineContainer/FineAdmin/FineAdminContainer";

const Fine = (props) => {
  const { img, isAdmin } = props;

  return (
    <S.Container>
      <HeaderContainer />
      <S.BackgroundImg img={img}>
        <S.Wrapper>
          <TitleHeaderContainer text="Fine" />
          {isAdmin ? <FineAdminContainer /> : <FineInfoContainer />}
        </S.Wrapper>
      </S.BackgroundImg>
    </S.Container>
  );
};

export default Fine;
