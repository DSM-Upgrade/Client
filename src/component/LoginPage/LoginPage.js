import React, { useState } from "react";
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import { Link } from "react-router-dom";
import * as S from "./style";

const LoginPage = () => {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
    console.log(loginValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.LoginBox onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <input
            placeholder="id"
            value={loginValues.username}
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={loginValues.password}
            placeholder="password"
            onChange={handleChange}
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
