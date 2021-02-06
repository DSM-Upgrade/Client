import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.MainBox>
        <S.LogoTitleBox>
          <S.Text>DMS - </S.Text>
          <S.Text style={{marginLeft: "6px"}} Blue> U</S.Text>
          <S.Text>P</S.Text>
        </S.LogoTitleBox>
        <S.LogoTitleBox>
          <S.Text Blue Title>
            U
          </S.Text>
          <S.Text Title>pgrade</S.Text>
        </S.LogoTitleBox>
        <S.LogoTitleBox Login>
          <a style={{margin: "19px 0 0 0"}}>
            <S.Text Blue>Login</S.Text>
          </a>
          <a style={{marginTop: "7px"}}>
            <S.Text Blue>Register</S.Text>
          </a>
        </S.LogoTitleBox>
      </S.MainBox>
    </S.Header>
  );
};

export default Header;
