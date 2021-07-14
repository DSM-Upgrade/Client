import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkContent = (props) => {
  const { linkProps, homeworkContent, isLoading } = props;
  const { Id } = linkProps;

  console.log(isLoading);
  console.log(homeworkContent);

  const { title, content, created_at, deadline } = homeworkContent;

  const id = Id;
  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.SectionContainer>
          <S.TitleContainer>
            <h1>{title}</h1>
            <p>어드민</p>
          </S.TitleContainer>
          <S.MainTextContainer>
            <p>{content ? content : "로딩중..."}</p>
          </S.MainTextContainer>
          <div className="secondBox">
            <Link
              to={{
                pathname: `/homeworkDetailView/${id}`,
                state: {
                  Id: id,
                  Title: title,
                  CreatedAt: created_at,
                  Deadline: deadline,
                },
              }}
            >
              <button>작성하기</button>
            </Link>
          </div>
        </S.SectionContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

HomeworkContent.defaultProps = {
  homeworkContent: {
    title: "",
    createdAt: "",
    deadline: "",
    returnAt: "", // 반환 안 했으면 null
    content: "",
    returnContent: "", // 반환 안 했으면 null
    files: [],
  },
};

export default HomeworkContent;
