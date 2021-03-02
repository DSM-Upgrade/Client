import React from 'react';
import * as S from './style';

const Vote = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.TitleBox>
          <div>2021 UP 신입생 공채</div>
          <S.Date>2021.3.27</S.Date>
          <S.Time>3시간 남음</S.Time>
        </S.TitleBox>
        <S.Detail>
          <S.VoteType>*단일투표 입니다.</S.VoteType>
        </S.Detail>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Vote;