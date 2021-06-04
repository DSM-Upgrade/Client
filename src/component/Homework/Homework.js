import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";
import HomeworkDetailView from "./HomeworkDetailView/HomeworkDetailView";

const Homework = (props) => {
  const { homeworkList } = props;

  const HomeworkList = homeworkList.map((homeworkList) => {
    const id = homeworkList.Id;
    if (homeworkList.Status  === "ASSIGNED") {
      return (
        <Link to={{pathname: `/homeworkDetailView/${id}`, state: {Title: homeworkList.Title, End: homeworkList.End, Start: homeworkList.Start, Id: id }}}>
          <S.AllocationBox key={id}>
            <h1>{homeworkList.Title}</h1>
            <p>{homeworkList.Content}</p>
            <p>분야 : 디자인</p>
            <p>대상 : 동아리원 전체</p>
            <p>기한 : {homeworkList.End} 까지 제출</p>
            <h4>할당됨</h4>
          </S.AllocationBox>
        </Link>
      );
    } else if (homeworkList.Status === "SUBMITTED") {
      return (
        <Link to={{pathname: `/homeworkDetailView/${id}`, state: {Title: homeworkList.Title, End: homeworkList.End, Start: homeworkList.Start, Id: id }}}>
          <S.SubmissionBox key={id}>
            <h1>{homeworkList.Title}</h1>
            <p>{homeworkList.Content}</p>
            <p>분야 : 디자인</p>
            <p>대상 : 동아리원 전체</p>
            <p>기한 : {homeworkList.End} 까지 제출</p>
            <h4>제출함</h4>
          </S.SubmissionBox> 
        </Link>
      );
    } else if (homeworkList.Status === "UN_SUBMITTED") {
      return (
        <Link to={{pathname: `/homeworkDetailView/${id}`, state: {Title: homeworkList.Title, End: homeworkList.End, Start: homeworkList.Start, Id: id }}}>
          <S.UnsubmittedBox key={id}>
          <h1>{homeworkList.Title}</h1>
          <p>{homeworkList.Content}</p>
          <p>분야 : 디자인</p>
          <p>대상 : 동아리원 전체</p>
          <p>기한 : 제출마감</p>
          <h4>미제출</h4>
        </S.UnsubmittedBox>
      </Link>
      );
    }
  });
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <div className="BackgroundImg"></div>
        <S.Wrapper>
          {HomeworkList}
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default Homework;
