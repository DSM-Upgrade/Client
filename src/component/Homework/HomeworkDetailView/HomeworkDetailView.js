import React, { useState } from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = (props) => {
  const [fileInputName, setFileInputName] = useState([]);
  const [fileList, setFileList] = useState([]);
  const { linkProps } = props;
  const Name = [];

  const onChangeHanddler = (e) => {
    clickEvent(e.target.files);
    setFileList(e.target.files);
  };

  const clickEvent = (e) => {
    for (let index = 0; index < e.length; index++) {
      Name[index] = e[index].name;
      console.log(fileNameString);
    }
    const fileNameString = `${Name}`;
    setFileInputName(fileNameString);
    console.log(fileList);
  };

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
            <div className="fileWrapper">
              <label htmlFor="inputFile">파일선택</label>
              <input id="fileName" type="text" disabled value={fileInputName} />
              <input //스타일링을 위해서 display: none
                onChange={onChangeHanddler}
                id="inputFile"
                type="file"
                multiple
              />
            </div>
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
