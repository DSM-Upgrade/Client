import React from 'react';
import * as S from './style';
import Header from '../../Header/Header';
import Vote from './Vote';
import Common from './Common';

const NoticeDetailView = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Inner>
          <S.TitleBox>
            <div>2021 UP 신입생 공채</div>
            <S.Date>2021.3.27</S.Date>
          </S.TitleBox>
          <S.Detail>
            <div>반갑다 작은 동아리원들아. 올해도 마찬가지로 본좌의 동아리에서 신입생을 뽑기로 하였다. 자세한 내용은 첨부파일로 올렸으니 참고하도록. </div>
          </S.Detail>
        </S.Inner>
        <S.File>첨부파일</S.File>
      </S.Wrapper>
    </S.Container>
  );
};

export default NoticeDetailView;