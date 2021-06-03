import React from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = (props) => {
  const { linkProps } = props;
  console.log(linkProps);
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.TitleContainer>
          <h1>{linkProps.Title}</h1>
          <div className="Wrapper">
            <p>관리자 • {linkProps.Start}</p>
            <p>기한 : {linkProps.End}</p>
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
