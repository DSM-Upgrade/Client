import React from 'react';
import * as S from './style';
import Header from '../../Header/Header';

const NoticeDetailView = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.TitleBox>
          <div>2021 UP 신입생 공채</div>
          <S.Date>2021.3.27</S.Date>
        </S.TitleBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default NoticeDetailView;