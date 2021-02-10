import React from "react";
import * as S from "./style";

const ProfileInfo = (props) => {
  const { name, student_num, field, username } = props;

  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoName>이름</S.InfoName>
        <S.InfoValue type="text" value={name} />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>학번</S.InfoName>
        <S.InfoValue type="number" value={student_num} />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>아이디</S.InfoName>
        <S.InfoValue type="text" value={username} />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>비밀번호</S.InfoName>
        <S.InfoValue />
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoName>전공</S.InfoName>
        <S.InfoValue type="text" value={field} />
      </S.InfoWrap>
    </S.Container>
  );
};

export default ProfileInfo;
