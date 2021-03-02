import React from 'react';
import * as S from './style';

const Common = () => {
  return (
    <div>
      <S.NoticeContents placeholder="내용을 입력하세요">
        </S.NoticeContents>
        <S.BottomWrapper>
          <S.File type="file"></S.File>
          <S.Submit>등록하기</S.Submit>
        </S.BottomWrapper>
    </div>
  );
};

export default Common;