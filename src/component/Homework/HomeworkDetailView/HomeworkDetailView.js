import React from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.TitleContainer>
          <h1>왜 킹시인가?</h1>
          <div className="Wrapper">
            <p>관리자 • 1월 25일</p>
            <p>기한 : 18:30</p>
          </div>
        </S.TitleContainer>
        <S.MainSection>
          <textarea></textarea>
          <div className="submitBox">
            <input type="file" />
            <div className="secondBox"><button>제출하기</button></div>
          </div>
        </S.MainSection>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkDetailView;