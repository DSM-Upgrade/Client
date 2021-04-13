import React from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = (props) => {
  const { HomeworkDetailViewJson } = props;
  console.log(HomeworkDetailViewJson);
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.TitleContainer>
          <h1>{HomeworkDetailViewJson.homeworkTitle}</h1>
          <div className="Wrapper">
            <p>관리자 • {HomeworkDetailViewJson.homeworkStart}</p>
            <p>기한 : {HomeworkDetailViewJson.homeworkEnd}</p>
          </div>
        </S.TitleContainer>
        <S.MainSection>
          <textarea></textarea>
          <div className="submitBox">
            <input type="file" />
            <div className="secondBox">
              <button>제출하기</button>
            </div>
          </div>
        </S.MainSection>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkDetailView;
