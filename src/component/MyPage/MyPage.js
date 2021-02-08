import React from "react";
import { fineBackground } from "../../assets/fine";
import * as S from "./style";

const MyPage = (props) => {
  const { data } = props;

  return (
    <S.Container img={fineBackground}>
      {/* <S.BackgroundImg src={fineBackground} /> */}
    </S.Container>
  );
};

export default MyPage;
