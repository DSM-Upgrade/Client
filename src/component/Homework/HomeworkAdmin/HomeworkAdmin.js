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
          <Link to="/homeworkCreate">
            <p>숙제생성</p>
          </Link>
        </S.SettingBox>
        <S.Wrapper>
          <div className="test">
            <Link to="/HomeworkAdminDetailView">
              <S.AllocationBox>
                <div>
                  <div>할당</div>
                </div>
                <div>
                  <p>코카콜라마셔라</p>
                </div>
                <div>
                  <p>김재현</p>
                </div>
                <div className="trashImage"></div>
                {isFiles ? <span id="clipImage"></span> : ""}
                <div>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </div>
              </S.AllocationBox>
            </Link>
            <Link to="/HomeworkAdminDetailView">
              <S.SubmissionBox>
                <div>
                  <div>제출</div>
                </div>
                <div>
                  <p>c언어 숙제</p>
                </div>
                <div>
                  <p>김재현</p>
                </div>
                <div className="trashImage"></div>
                {isFiles ? <span id="clipImage"></span> : ""}
                <div>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </div>
              </S.SubmissionBox>
            </Link>
            <Link to="/HomeworkAdminDetailView">
              <S.UnsubmittedBox>
                <div>
                  <div>제출</div>
                </div>
                <div>
                  <p>코카콜라마셔라</p>
                </div>
                <div>
                  <p>김재현</p>
                </div>
                <div className="trashImage"></div>
                {isFiles ? <span id="clipImage"></span> : ""}
                <div>
                  <p>{isDeadLine != null ? "기한없음" : `${isDeadLine}`}</p>
                </div>
              </S.UnsubmittedBox>
            </Link>
          </div>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdmin;
