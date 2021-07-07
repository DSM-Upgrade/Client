import React, { useState } from "react";
import * as S from "./style";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkDetailView = (props) => {
  const { linkProps } = props;
  const { Title, CreatedAt, Deadline, Id } = linkProps;

  const [fileInputName, setFileInputName] = useState([]);
  const [fileList, setFileList] = useState([]);
  const Name = [];
  const [homeworkContent, setHomeWorkContent] = useState("");

  const onChangeFileHanddler = (e) => {
    fileNameInputValue(e.target.files);
    setFileList(e.target.files);
  };

  const fileNameInputValue = (e) => {
    /* 파일 선택을 하면 옆에 파일명 뜨게하는 함수 */
    for (let index = 0; index < e.length; index++) {
      Name[index] = e[index].name;
    }
    const fileNameString =
      `${Name}` + " " + `${Name.length}개 파일이 추가되었습니다.`;
    setFileInputName(fileNameString);
    console.log(fileNameString);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(fileList);
    console.log(homeworkContent);
    console.log(Id);
  }

  const onChangeFileFormData = (e) => {
    const { value } = e.target;
    setHomeWorkContent(value);
  };

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
        <S.MainSection onSubmit={onSubmit}>
          <textarea
            name="homeworkContent"
            onChange={onChangeFileFormData}
          ></textarea>
          <div className="submitBox">
            <div className="fileWrapper">
              <label htmlFor="inputFile">파일선택</label>
              <input id="fileName" type="text" disabled value={fileInputName} />
              <input //스타일링을 위해서 display: none
                onChange={onChangeFileHanddler}
                id="inputFile"
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
