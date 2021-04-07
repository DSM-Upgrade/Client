import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";
import HomeworkAdminDetailView from "../HomeworkAdminDetailView/HomeworkAdminDetailView";

const HomeworkAdmin = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <S.Wrapper>
          <table>
            <Link to="/HomeworkAdminDetailView" >
            <S.AllocationBox>
              <td><div>할당</div></td>
              <td><p>코카콜라마셔라</p></td>
              <td><p>김재현</p></td>
              <td><p>기한없음</p></td>
            </S.AllocationBox>
            </Link>
            <Link to="/HomeworkAdminDetailView" >
              <S.SubmissionBox>
              <td><div>제출</div></td>
              <td><p>c언어 숙제</p></td>
              <td><p>김재현</p></td>
              <td><p>기한없음</p></td>
              </S.SubmissionBox>
            </Link>
            <Link to="/HomeworkAdminDetailView">
              <S.UnsubmittedBox>
              <td><div>제출</div></td>
              <td><p>코카콜라마셔라</p></td>
              <td><p>김재현</p></td>
              <td><p>기한없음</p></td>
              </S.UnsubmittedBox>
            </Link>
          </table>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdmin;
