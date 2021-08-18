import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../container/TitleHeaderContainer/TitleHeaderContainer";

const Homework = (props) => {
  const { homeworkList } = props;

  console.log(`props`);
  console.log(homeworkList);

  const HomeworkList = homeworkList.length
    ? homeworkList.map((homeworkList, index) => {
        console.log(homeworkList);
        const id = homeworkList.id;
        if (homeworkList.status === "ASSIGNED") {
          return (
            <Link
              key={index}
              to={{
                pathname: `/homeworkContent/${id}`,
                state: {
                  Id: id,
                },
              }}
            >
              <S.AllocationBox>
                <h1>{homeworkList.title}</h1>
                <p>{homeworkList.content}</p>
                <p>분야 : 디자인</p>
                <p>대상 : 동아리원 전체</p>
                <p>기한 : {homeworkList.deadline} 까지 제출</p>
                <h4>할당됨</h4>
              </S.AllocationBox>
            </Link>
          );
        } else if (homeworkList.status === "SUBMITTED") {
          return (
            <Link
              key={index}
              to={{
                pathname: `/homeworkContent/${id}`,
                state: {
                  Id: id,
                },
              }}
            >
              <S.SubmissionBox>
                <h1>{homeworkList.title}</h1>
                <p>{homeworkList.content}</p>
                <p>분야 : 디자인</p>
                <p>대상 : 동아리원 전체</p>
                <p>기한 : {homeworkList.deadline} 까지 제출</p>
                <h4>제출함</h4>
              </S.SubmissionBox>
            </Link>
          );
        } else if (homeworkList.status === "UNSUBMITTED") {
          return (
            <Link
              key={index}
              to={{
                pathname: `/homeworkContent/${id}`,
                state: {
                  Id: id,
                },
              }}
            >
              <S.UnsubmittedBox>
                <h1>{homeworkList.title}</h1>
                <p>{homeworkList.content}</p>
                <p>분야 : 디자인</p>
                <p>대상 : 동아리원 전체</p>
                <p>기한 : 제출마감</p>
                <h4>미제출</h4>
              </S.UnsubmittedBox>
            </Link>
          );
        }
      })
    : "리스트 불러오는중...";

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <div className="BackgroundImg"></div>
        <S.Wrapper>{HomeworkList}</S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

Homework.defaultProps = {
  homeworkList: [],
};

export default Homework;
