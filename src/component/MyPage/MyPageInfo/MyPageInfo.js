import React from "react";
import MyPageFineContainer from "../../../container/MyPageContanier/MyPageInfo/MyPageFine/MyPageFineContainer";
import MyPageHomeworkContainer from "../../../container/MyPageContanier/MyPageInfo/MyPageHomework/MyPageHomeworkContainer";
import * as S from "./style";

const MyPageInfo = () => {
  return (
    <S.Container>
      <S.InfoBackground>
        <MyPageFineContainer />
        <MyPageHomeworkContainer />
      </S.InfoBackground>
    </S.Container>
  );
};

export default MyPageInfo;
