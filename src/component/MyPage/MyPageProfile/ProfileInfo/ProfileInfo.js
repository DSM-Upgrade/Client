import React from "react";
import * as S from "./style";

const ProfileInfo = (props) => {
  const { name, username, studentNumManage, fieldManage } = props;
  const { modalOn } = props;

  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoName>이름</S.InfoName>
        <S.InfoValue type="text" value={name} readOnly />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>학번</S.InfoName>
        <S.InfoValue
          type="text"
          value={studentNumManage.studentNum}
          onChange={studentNumManage.onChangeStdNum}
        />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>분야</S.InfoName>
        <S.FieldSelect
          value={fieldManage.field}
          onChange={fieldManage.onChangeField}
        >
          {fieldManage.FieldsData.map((fieldData) => (
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
        <S.ModifyButton onClick={() => modalOn()}>수정</S.ModifyButton>
      </S.InfoWrap>
      <S.CompleteButtonWrap>
        <S.CompleteButton>변경사항 저장</S.CompleteButton>
      </S.CompleteButtonWrap>
    </S.Container>
  );
};

export default ProfileInfo;
