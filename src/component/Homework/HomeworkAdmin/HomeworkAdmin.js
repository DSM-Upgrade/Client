import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";

const HomeworkAdmin = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <S.Wrapper>
          <S.AllocationBox>
            <div>할당</div>
            <p>제목</p>
            <p>김재현</p>
            <p>2021.3.27</p>
          </S.AllocationBox>
          <S.SubmissionBox>
            <div>제출</div>
            <p>제목</p>
            <p>김재현</p>
            <p>기한없음</p>
          </S.SubmissionBox>
          <S.UnsubmittedBox>
            <div>누락</div>
            <p>제목</p>
            <p>김재현</p>
            <p>기한없음</p>
          </S.UnsubmittedBox>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdmin;
