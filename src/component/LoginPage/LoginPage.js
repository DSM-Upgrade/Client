import React, { useState } from "react";
import { useDispatch } from "react-redux";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import { Link } from "react-router-dom";
import * as S from "./style";

const LoginPage = (props) => {
  const { loginData, onSubmitLoginFormData, onChangeLoginData } = props;
  const { username, password } = loginData;

  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.LoginBox onSubmit={onSubmitLoginFormData}>
          <h1>LOGIN</h1>
          <input
            placeholder="id"
            value={username}
            name="username"
            onChange={onChangeLoginData}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={onChangeLoginData}
          />
          <input type="submit" className="submitButton" value="로그인" />
          <Link to="/register">회원가입</Link>
        </S.LoginBox>
        <div></div>
        <div></div>
        <div></div>
        <S.LoginImg />
      </S.MainBox>
    </S.MainWrapper>
  );
};

export default LoginPage;
