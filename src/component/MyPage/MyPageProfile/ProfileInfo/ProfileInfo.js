import React from "react";

import * as S from "./style";

import DropDownContainer from "../../../../feature/dropDown/DropDownContainer";
import ProfileInput from "../../../../feature/profile/proflieInput/ProfileInput";

const ProfileInfo = (props) => {
  const { userData, isChange } = props;
  const { modalOn, onModifyClick, onChangeUserData } = props;

  const { name, student_num, username } = userData;

  const ProfileInputNameProps = {
    title: "이름",
    id: "profile--input--name",
    name: "name",
    type: "text",
    readOnly: true,
    defaultValue: name,
  };
  const ProfileInputIdProps = {
    title: "아이디",
    id: "profile--input--username",
    name: "username",
    type: "text",
    readOnly: true,
    defaultValue: username,
  };
  const ProfileInputStdNumProps = {
    title: "학번",
    id: "profile--input--std-num",
    name: "student_num",
    type: "text",
    readOnly: false,
    defaultValue: student_num,
    onChange: onChangeUserData,
  };

  return (
    <S.Container>
      <ProfileInput {...ProfileInputNameProps} />
      <ProfileInput {...ProfileInputIdProps} />
      <ProfileInput {...ProfileInputStdNumProps} />
      <DropDownContainer dropDownKind="field" />
      <S.InfoWrap>
        <S.ModifyButton onClick={modalOn}>비밀번호 수정</S.ModifyButton>
      </S.InfoWrap>
      <S.CompleteButtonWrap>
        <S.CompleteButton show={isChange} onClick={onModifyClick}>
          변경사항 저장
        </S.CompleteButton>
      </S.CompleteButtonWrap>
    </S.Container>
  );
};

export default ProfileInfo;
