import React,{ useState } from 'react';
import { logo } from '../../assets/header';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const [isLogin,setIsLogin] = useState(false);

  const activeStyle = {
    color: "#3987ee"
  }

  return (
    <S.Container>
      <img src={logo} />
      <S.SignWrapper>
        {isLogin ?
          <div>
            <S.SignText to='/login' as={Link}>login</S.SignText>
            <S.SignText to='/register' as={Link}>register</S.SignText>
          </div> :
          <S.SignText to='/myPage' as={Link}>MyPage</S.SignText>
          }
      </S.SignWrapper>
      <S.NavWrap>
        <S.NavItem to="/main" activeStyle={activeStyle}>Main</S.NavItem>
        <S.NavItem to="/notice" activeStyle={activeStyle}>Notice</S.NavItem>
        <S.NavItem to="/homework" activeStyle={activeStyle}>Homework</S.NavItem>
        <S.NavItem to="/fine" activeStyle={activeStyle}>Fine</S.NavItem>
      </S.NavWrap>
    </S.Container>
  );
};

export default Header;