import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";
import HomeworkDetailView from "./HomeworkDetailView/HomeworkDetailView";

const Homework = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <div className="BackgroundImg"></div>
        <S.Wrapper>
            <S.AllocationBox>
              <h1>왜 킹시인가?</h1>
              <p>펩시가 코카콜라보다 맛있는 이유를 알아오세요.</p>
              <p>분야 : 디자인</p>
              <p>대상 : 동아리원 전체</p>
              <p>기한 : 18:30 까지 제출</p>
              <h4>할당됨</h4>
            </S.AllocationBox>
            <S.SubmissionBox>
              <h1>왜 킹시인가?</h1>
              <p>펩시가 코카콜라보다 맛있는 이유를 알아오세요.</p>
              <p>분야 : 디자인</p>
              <p>대상 : 동아리원 전체</p>
              <p>기한 : 18:30 까지 제출</p>
              <h4>제출함</h4>
            </S.SubmissionBox>
            <S.UnsubmittedBox>
              <h1>왜 킹시인가?</h1>
              <p>펩시가 코카콜라보다 맛있는 이유를 알아오세요.</p>
              <p>분야 : 디자인</p>
              <p>대상 : 동아리원 전체</p>
              <p>기한 : 18:30 까지 제출</p>
              <h4>미제출</h4>
            </S.UnsubmittedBox>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default Homework;
