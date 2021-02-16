import React from 'react';
import * as S from './style';
import { iconFacebook } from '../../../assets/main';
import { iconGithub } from '../../../assets/main';

const Footer = () => {
  return (
    <S.Container>
      <S.MemberWrapper>
        <S.GradeWrapper>
          <S.GradeBox>1학년</S.GradeBox>
          <S.MemberBox>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
          </S.MemberBox>
        </S.GradeWrapper>
        <S.Line />
        <S.GradeWrapper>
          <S.GradeBox>2학년</S.GradeBox>
          <S.MemberBox>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
          </S.MemberBox>
        </S.GradeWrapper>
        <S.Line />
        <S.GradeWrapper>
          <S.GradeBox>3학년</S.GradeBox>
          <S.MemberBox>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
            <div>김철수 FrontEnd</div>
          </S.MemberBox>
        </S.GradeWrapper>
      </S.MemberWrapper>
      <S.ContactWrapper>
        <S.Text>CONTACT US</S.Text>
        <S.IconWrapper>
          <a href="https://www.facebook.com/DSM-UP-112827210421734" target="_blank"><S.Icon src={iconFacebook}/></a>
          <a href="https://github.com/DSM-Upgrade" target="_blank"><S.Icon src={iconGithub}/></a>
        </S.IconWrapper>
      </S.ContactWrapper>
    </S.Container>
  );
};

export default Footer;