import React from "react";
import * as S from "./style";

const PasswordModal = (props) => {
  const { errorData, PWInfo } = props;
  const { ChangePWInfo, ConfirmPWInfo, ModalOff, PreventModalOff } = props;
  const { state, text } = errorData;
  const { curPW, newPW, rePW, confirmInfo } = PWInfo;

  return (
    <S.Container onClick={PreventModalOff}>
      <S.Title>비밀번호 변경</S.Title>
      <S.Form>
        <S.SubTitle>비밀번호 인증</S.SubTitle>
        <S.InputWrap>
          <S.FormInput
            name="curPW"
            value={curPW}
            onChange={ChangePWInfo}
            type="password"
            placeholder="현재 비밀번호"
          />
          {state && <S.ErrorText>{text}</S.ErrorText>}
        </S.InputWrap>
        <S.InputWrap>
          <S.FormInput
            name="newPW"
            value={newPW}
            onChange={ChangePWInfo}
            type="password"
            placeholder="새 비밀번호"
          />
          <S.FormInput
            name="rePW"
            value={rePW}
            onChange={ChangePWInfo}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          {confirmInfo.state && <S.ErrorText>{confirmInfo.text}</S.ErrorText>}
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button onClick={ConfirmPWInfo}>확인</S.Button>
          <S.Button onClick={ModalOff} background={"#FF7A7A"}>
            취소
          </S.Button>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default PasswordModal;
