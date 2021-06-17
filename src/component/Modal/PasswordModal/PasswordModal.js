import React from "react";
import * as S from "./style";

const PasswordModal = (props) => {
  const { errorData, passwordInfo } = props;
  const {
    modalOff,
    preventModalOff,
    onSubmitPassword,
    changePasswordInfo,
  } = props;
  const { state, text } = errorData;
  const { nowPassword, newPassword, reEnterPassword } = passwordInfo;

  return (
    <S.Container onClick={preventModalOff} data-testid="password-modal-element">
      <S.Title>비밀번호 변경</S.Title>
      <S.Form>
        <S.SubTitle>비밀번호 인증</S.SubTitle>
        <S.InputWrap>
          <S.FormInput
            name="nowPassword"
            defaultValue={nowPassword}
            onChange={changePasswordInfo}
            type="password"
            placeholder="현재 비밀번호"
          />
          {state && <S.ErrorText>{text}</S.ErrorText>}
        </S.InputWrap>
        <S.InputWrap>
          <S.FormInput
            name="newPassword"
            defaultValue={newPassword}
            onChange={changePasswordInfo}
            type="password"
            placeholder="새 비밀번호"
          />
          <S.FormInput
            name="reEnterPassword"
            defaultValue={reEnterPassword}
            onChange={changePasswordInfo}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          {/* {confirmInfo.state && <S.ErrorText>{confirmInfo.text}</S.ErrorText>} */}
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button onClick={onSubmitPassword}>확인</S.Button>
          <S.Button onClick={modalOff} background={"#FF7A7A"}>
            취소
          </S.Button>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default PasswordModal;
