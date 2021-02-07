import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.MainBox>
        <S.LogoBox>
          <S.Text>DMS - </S.Text>
          <S.Text style={{ marginLeft: "6px" }} Blue>
            U
          </S.Text>
          <S.Text>P</S.Text>
        </S.LogoBox>
        <S.LogoBox>
          <S.Text Blue Title>
            U
          </S.Text>
          <S.Text Title>pgrade</S.Text>
        </S.LogoBox>
        <S.LogoBox Login>
          <a style={{ margin: "19px 0 0 0" }}>
            <S.Text Blue>Login</S.Text>
          </a>
          <a style={{ marginTop: "7px" }}>
            <S.Text Blue>Register</S.Text>
          </a>
        </S.LogoBox>
      </S.MainBox>
      <S.Nav>
        <a href="#">Main</a>
        <a href="#">Notice</a>
        <a href="#">Homework</a>
        <a href="#">Fine</a>
      </S.Nav>
      <S.Container>
        <S.DesignBox>
          <div></div>
          <div></div>
          <div></div>
        </S.DesignBox>
      </S.Container>
    </S.Header>
  );
};

export default Header;
