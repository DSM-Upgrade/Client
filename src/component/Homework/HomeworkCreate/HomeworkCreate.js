import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";

const HomeworkAdmin = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.SectionContainer>
          <S.SectionHeaderContainer>
            <header>
              <input type="text" placeholder="숙제 제목 입력"></input>
              <div className="dayWrapper">
                <p>기한 : </p>
                <input type="date"></input>
                <input type="time"></input>
              </div>
            </header>
            <section>
              <textarea placeholder="설명을 써 넣어주세요"></textarea>
              <div>
                <p>할당 멤버 선택</p>
                <input></input>
              </div>
              <input type="button" value="생성하기" />
            </section>
          </S.SectionHeaderContainer>
        </S.SectionContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdmin;
