import React from 'react';
import * as S from './style';
import { noticeFileIcon } from '../../../assets/Notice';

const NoticeItem = () => {
  const type = true;
  return (
    <S.Item>
      <S.No>8</S.No>
      <S.Type>{type?'투표':'공지'}</S.Type>
      <S.Title>2021 UP 신입생 모집 절차안내</S.Title>
      <S.File src={noticeFileIcon}/>
      <S.Date>2021.3.27</S.Date>
    </S.Item>
  );
};

export default NoticeItem;