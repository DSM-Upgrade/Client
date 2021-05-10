import React from "react";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import * as S from "./style";

const RegisterPage = () => {
  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.RegisterBox>
          <h1>Register</h1>
          <div className="firstLine">
            <input placeholder="학년" maxlength="1"></input>
            <input placeholder="반" maxlength="1"></input>
            <input placeholder="번호" maxlength="2"></input>
            <input placeholder="이름"></input>
          </div>
          <div className="anotherLine">
            <input placeholder="아이디 (6 ~ 16자리, 영어, 숫자)"></input>
            <input placeholder="비밀번호 (8 ~ 20자리, 영어, 숫자, 특수문자)"></input>
            <select name="Field">
              <option value="">분야</option>
              <option value="frontEnd">웹 프론트엔드</option>
              <option value="backEnd">웹 백엔드</option>
              <option value="android">안드로이드</option>
              <option value="IOS">IOS</option>
              <option value="design">디자인</option>
            </select>
          </div>
          <button>회원가입</button>
          <a href="#">로그인</a>
        </S.RegisterBox>
        <div className="backgroundTriangle">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.MainBox>
    </S.MainWrapper>
  );
};

export default RegisterPage;
