import React from "react";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import { Link } from 'react-router-dom';
import * as S from "./style";


const LoginPage = () => {
  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.LoginBox>
          <h1>LOGIN</h1>
          <input placeholder="id" />
          <input type="password" placeholder="password" />
          <button>로그인</button>
          <Link to='/register'>회원가입</Link>
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
