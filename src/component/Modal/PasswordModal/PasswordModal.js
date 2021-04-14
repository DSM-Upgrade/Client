import React from "react";
import * as S from "./style";

const PasswordModal = (props) => {
  const { errorData, pwInfo } = props;
  const { changePWInfo, confirmPWInfo, modalOff, preventModalOff } = props;
  const { state, text } = errorData;
  const { curPW, newPW, rePW, confirmInfo } = pwInfo;

  return (
    <S.Container onClick={preventModalOff} data-testid="password-modal-element">
      <S.Title>비밀번호 변경</S.Title>
      <S.Form>
        <S.SubTitle>비밀번호 인증</S.SubTitle>
        <S.InputWrap>
          <S.FormInput
            name="curPW"
            defaultValue={curPW}
            onChange={changePWInfo}
            type="password"
            placeholder="현재 비밀번호"
          />
          {state && <S.ErrorText>{text}</S.ErrorText>}
        </S.InputWrap>
        <S.InputWrap>
          <S.FormInput
            name="newPW"
            defaultValue={newPW}
            onChange={changePWInfo}
            type="password"
            placeholder="새 비밀번호"
          />
          <S.FormInput
            name="rePW"
            defaultValue={rePW}
            onChange={changePWInfo}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          {confirmInfo.state && <S.ErrorText>{confirmInfo.text}</S.ErrorText>}
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button onClick={confirmPWInfo}>확인</S.Button>
          <S.Button onClick={modalOff} background={"#FF7A7A"}>
            취소
          </S.Button>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default PasswordModal;
