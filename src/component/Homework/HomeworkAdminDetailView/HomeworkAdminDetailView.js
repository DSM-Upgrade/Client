import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkAdminDetailView = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.SectionContainer>
          <S.SettingBox>
            <p>완료</p>
            <p>반환</p>
            <p>수정</p>
          </S.SettingBox>
          <S.TitleContainer>
            <h1>왜 킹시인가?</h1>
            <p>김재현</p>
          </S.TitleContainer>
          <S.MainTextContainer>
            <p>어쩌고 저쩌고 코카콜라</p>
          </S.MainTextContainer>
          <input type="file" />
        </S.SectionContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdminDetailView;
