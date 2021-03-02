import React,{useState} from 'react';
import Header from '../../Header/Header';
import Common from './Common';
import Vote from './Vote';
import * as S from './style';

const NoticeWrite = () => {
  const [type,setType] = useState('');

  const handleNoticeType = (e) => {
    setType(e.target.id);
    console.log(type);
  }

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.TitleInner>
          <S.NoticeTitle placeholder="제목을 입력하세요"></S.NoticeTitle>
          <S.Inner>
            <S.NoticeType type='radio' name='type' id='common' checked onClick={handleNoticeType}/>
            <label for='common'>공지</label>
            <S.NoticeType type='radio' name='type' id='vote' onClick={handleNoticeType}/>
            <label for='vote'>투표</label>
          </S.Inner>
          <S.Inner>
            <S.NoticeType type='radio' name='vote' id='single' checked onClick={handleNoticeType}/>
              <label for='single'>단일</label>
            <S.NoticeType type='radio' name='vote' id='multi' onClick={handleNoticeType}/>
              <label for='multi'>복수</label>
          </S.Inner>
        </S.TitleInner>
        <hr />
        <Common />
      </S.Wrapper>
    </S.Container>
  );
};

export default NoticeWrite;