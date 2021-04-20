import React from 'react';
import * as S from './style';
import { noticeFileIcon } from '../../../assets/notice';
import { noticeTrashIcon } from '../../../assets/notice';

const NoticeItem = ({isAdmin}) => {

  return (
    <S.Item>
      <S.No>8</S.No>
      <S.Type>공지</S.Type>
      <S.Title>2021 UP 신입생 모집 절차안내</S.Title>
      <S.IconBox>
        {
          isAdmin
          ? <S.Icon src={noticeTrashIcon}/>
          : ""
        }
        <S.Icon src={noticeFileIcon}/>
      </S.IconBox>
      <S.Date>2021.3.27</S.Date>
    </S.Item>
  );
};

export default NoticeItem;