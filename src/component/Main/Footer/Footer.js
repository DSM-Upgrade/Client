import React from 'react';
import * as S from './style';
import { iconFacebook } from '../../../assets/main';
import { iconGithub } from '../../../assets/main';

const Footer = () => {
  return (
    <S.Container>
      <S.MemberWrapper>

      </S.MemberWrapper>
      <S.ContactWrapper>
        <S.Text>CONTACT US</S.Text>
        <S.IconWrapper>
          <S.Icon src={iconFacebook}/>
          <S.Icon src={iconGithub}/>
        </S.IconWrapper>
      </S.ContactWrapper>
    </S.Container>
  );
};

export default Footer;