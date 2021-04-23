import React from "react";
import * as S from "./style";

const ProfileInfo = (props) => {
  const { fields, userData, isChange } = props;
  const { modalOn, onModifyClick, onChangeUserData } = props;

  const { name, student_num, username, field } = userData;

  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoName>이름</S.InfoName>
        <S.InfoValue type="text" defaultValue={name} readOnly />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName htmlFor="studentNum">학번</S.InfoName>
        <S.InfoValue
          id="studentNum"
          type="text"
          name="student_num"
          defaultValue={student_num}
          onChange={onChangeUserData}
        />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName htmlFor="field">분야</S.InfoName>
        <S.FieldSelect
          id="field"
          name="field"
          defaultValue={field}
          onChange={onChangeUserData}
        >
          {fields?.length &&
            fields.map((fieldData) => (
              <S.Field key={fieldData.id} defaultValue={fieldData.name}>
                {fieldData.name}
              </S.Field>
            ))}
        </S.FieldSelect>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>아이디</S.InfoName>
        <S.InfoValue type="text" defaultValue={username} readOnly />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>비밀번호</S.InfoName>
        <S.ModifyButton onClick={modalOn}>수정</S.ModifyButton>
      </S.InfoWrap>
      <S.CompleteButtonWrap>
        <S.CompleteButton
          show={isChange}
          disabled={!isChange}
          onClick={onModifyClick}
        >
          변경사항 저장
        </S.CompleteButton>
      </S.CompleteButtonWrap>
    </S.Container>
  );
};

export default ProfileInfo;
