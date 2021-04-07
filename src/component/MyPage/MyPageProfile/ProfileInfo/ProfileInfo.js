import React from "react";
import * as S from "./style";

const ProfileInfo = (props) => {
  const { name, username, studentNumManage, fieldManage, isChange } = props;
  const { modalOn } = props;

  const { studentNum, onChangeStdNum } = studentNumManage;
  const { field, FieldsData, onChangeField } = fieldManage;

  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoName>이름</S.InfoName>
        <S.InfoValue type="text" value={name} readOnly />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName htmlFor="studentNum">학번</S.InfoName>
        <S.InfoValue
          id="studentNum"
          type="text"
          value={studentNum}
          onChange={onChangeStdNum}
        />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName htmlFor="field">분야</S.InfoName>
        <S.FieldSelect id="field" value={field} onChange={onChangeField}>
          {FieldsData.map((fieldData) => (
            <S.Field key={fieldData.name} value={fieldData.name}>
              {fieldData.name}
            </S.Field>
          ))}
        </S.FieldSelect>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>아이디</S.InfoName>
        <S.InfoValue type="text" value={username} readOnly />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>비밀번호</S.InfoName>
        <S.ModifyButton onClick={modalOn}>수정</S.ModifyButton>
      </S.InfoWrap>
      <S.CompleteButtonWrap>
        <S.CompleteButton show={isChange} disabled={!isChange}>
          변경사항 저장
        </S.CompleteButton>
      </S.CompleteButtonWrap>
    </S.Container>
  );
};

export default ProfileInfo;
