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
            <div>김경호 Default</div>
            <div>김호영 Default</div>
            <div>박세연 Default</div>
            <div>양채원 Default</div>
            <div>정고은 Default</div>
          </S.MemberBox>
        </S.GradeWrapper>
        <S.Line />
        <S.GradeWrapper>
          <S.GradeBox>2학년</S.GradeBox>
          <S.MemberBox>
            <div>김재현 FrontEnd</div>
            <div>고도현 BackEnd</div>
            <div>권민정 FrontEnd</div>
            <div>박성현 FrontEnd</div>
            <div>서&nbsp;&nbsp;&nbsp;현 FrontEnd</div>
            <div>정고은 BackEnd</div>
          </S.MemberBox>
        </S.GradeWrapper>
        <S.Line />
        <S.GradeWrapper>
          <S.GradeBox>3학년</S.GradeBox>
          <S.MemberBox>
            <div>김대웅 BackEnd</div>
            <div>배길준 FrontEnd</div>
            <div>서민준 BackEnd</div>
            <div>안영준 BackEnd</div>
            <div>유시온 FrontEnd</div>
            <div>이진혁 BackEnd</div>
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