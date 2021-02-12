import React from "react";
import * as S from "./style";

const MyPageAuth = (props) => {
  const { authList } = props;

  return (
    <S.Container>
      <S.InfoBackground>
        <S.Title>회원가입 신청</S.Title>
        <S.Line />
        <S.AuthBox>
          {authList.map((authData) => {
            const { stdNum, name, id } = authData;
            return (
              <S.AuthItem key={id}>
                <S.AuthInfo>{`${stdNum} ${name}`}</S.AuthInfo>
                <S.ButtonWrap>
                  <S.AuthButton>수락</S.AuthButton>
                  <S.AuthButton background="#FF9F9F">거절</S.AuthButton>
                </S.ButtonWrap>
              </S.AuthItem>
            );
          })}
        </S.AuthBox>
      </S.InfoBackground>
    </S.Container>
  );
};

export default MyPageAuth;
