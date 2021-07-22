import React, { useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkAdminDetailView = (props) => {
  const { linkProps, adminContent } = props;
  const { Files, Title, Name } = linkProps;

  console.log(adminContent);
  console.log(Files);

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.SectionContainer>
          <S.SettingBox>
            <p>완료</p>
            <p>반환</p>
            <p>수정</p>
          </S.SettingBox>
          <S.TitleContainer>
            <h1>{Title}</h1>
            <p>{Name}</p>
          </S.TitleContainer>
          <S.MainTextContainer>
            {adminContent ? <p>{adminContent[0].content}</p> : "받아오는중.."}
          </S.MainTextContainer>
          <p className="fontFile">첨부파일</p>
          {Files
            ? Files.map((Files) => {
                <a
                  target="_blank"
                  href={`http://dsm-upgrade.club-file.s3-website.ap-northeast-2.amazonaws.com/homework/${Files}`}
                ></a>;
              })
            : ""}
        </S.SectionContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkAdminDetailView;
