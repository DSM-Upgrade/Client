import React from 'react';
import Header from '../../Header/Header';
import * as S from './style';

const NoticeWrite = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.TitleInner>
          <S.NoticeTitle placeholder="제목을 입력하세요"></S.NoticeTitle>
          <S.NoticeType />
        </S.TitleInner>
        <hr />
        <S.NoticeContents placeholder="내용을 입력하세요">
        </S.NoticeContents>
        <S.BottomWrapper>
          <S.File type="file"></S.File>
          <S.Submit>등록하기</S.Submit>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default NoticeWrite;