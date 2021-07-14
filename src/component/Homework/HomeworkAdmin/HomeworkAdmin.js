import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";
import HomeworkAdminDetailView from "../HomeworkAdminDetailView/HomeworkAdminDetailView";

const HomeworkAdmin = () => {
  const [isFiles, setIsFiles] = useState(true);
  const [isDeadLine, setIsDeadLine] = useState("");

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <S.SettingBox>
          <select>
            <option>학생</option>
            <option value={1}>김재현</option>
          </select>
          <Link to="/homeworkCreate">
            <p>숙제생성</p>
          </Link>
        </S.SettingBox>
        <S.Wrapper>
          <table>
            <Link to="/HomeworkAdminDetailView">
              <S.AllocationBox>
                <td>
                  <div>할당</div>
                </td>
                <td>
                  <p>코카콜라마셔라</p>
                </td>
                <td>
                  <p>김재현</p>
                </td>
                <Link className="trashLink" to="">
                  <td className="trashImage"></td>
                </Link>
                {isFiles ? <span id="clipImage"></span> : ""}
                <td>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </td>
              </S.AllocationBox>
            </Link>
            <Link to="/HomeworkAdminDetailView">
              <S.SubmissionBox>
                <td>
                  <div>제출</div>
                </td>
                <td>
                  <p>c언어 숙제</p>
                </td>
                <td>
                  <p>김재현</p>
                </td>
                <Link className="trashLink" to="">
                  <td className="trashImage"></td>
                </Link>
                {isFiles ? <span id="clipImage"></span> : ""}
                <td>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </td>
              </S.SubmissionBox>
            </Link>
            <Link to="/HomeworkAdminDetailView">
              <S.UnsubmittedBox>
                <td>
                  <div>제출</div>
                </td>
                <td>
                  <p>코카콜라마셔라</p>
                </td>
                <td>
                  <p>김재현</p>
                </td>
                <Link className="trashLink" to="">
                  <td className="trashImage"></td>
                </Link>
                {isFiles ? <span id="clipImage"></span> : ""}
                <td>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </td>
              </S.UnsubmittedBox>
            </Link>
          </table>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdmin;
