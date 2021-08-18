import React, { useState } from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = (props) => {
  const {
    linkProps,
    fileInputName,
    onSubmitHanddler,
    onChangeFileHanddler,
    onChangeFileFormData,
  } = props;
  const { Title, CreatedAt, Deadline, Id } = linkProps;

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.TitleContainer>
          <h1>{Title}</h1>
          <div className="Wrapper">
            <p>관리자 • {CreatedAt}</p>
            <p>기한 : {Deadline}</p>
          </div>
        </S.TitleContainer>
        <S.MainSection onSubmit={onSubmitHanddler}>
          <textarea name="content" onChange={onChangeFileFormData}></textarea>
          <div className="submitBox">
            <div className="fileWrapper">
              <label htmlFor="inputFile">파일선택</label>
              <input id="fileName" type="text" disabled value={fileInputName} />
              <input //스타일링을 위해서 display: none
                onChange={onChangeFileHanddler}
                id="inputFile"
                name="files"
                type="file"
                multiple
              />
            </div>
            <div className="secondBox">
              <input className="button" type="submit" value="제출하기" />
            </div>
          </div>
        </S.MainSection>
      </S.MainWrapper>
    </S.Container>
  );
};

export default HomeworkDetailView;
