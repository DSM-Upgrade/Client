import React from 'react';
import * as S from './style';
import Header from '../Header/Header';
import TitleHeaderContainer from '../../container/TitleHeaderContainer/TitleHeaderContainer';
import NoticeItem from './NoticeItem/NoticeItem';

const Notice = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <TitleHeaderContainer text="Notice"/>
        <S.Inner>
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
};

export default Notice;