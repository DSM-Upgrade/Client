import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #F8FBFF;
`

export const Wrapper = styled.div`
  width: 810px;
  height: 900px;
  margin: auto;
`

export const TitleInner = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
`

export const NoticeType = styled.input`
  width: 20px;
  border: 1px solid #8E8AFF;
  background: #ffffff;
  border-radius: 10px;
  margin-left: 20px;
`

export const Inner = styled.div`
  margin: auto;
`

export const NoticeTitle = styled.input`
  width: 540px;
  height: 95%;
  margin-right: 30px;
  border-radius: 10px;
  border: 1px solid #8E8AFF;
  padding-left: 15px;
  padding-right: 15px;
  background: #ffffff;
  outline: none;
  font-size: 24px;
`

export const NoticeContents = styled.textarea`
  width: 94.77%;
  height: 650px;
  resize: none; 
  border: 1px solid #8E8AFF;
  outline: none;
  font-size: 18px;
  padding: 20px;
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

export const File = styled.input`

`

export const Submit = styled.button`
  width: 140px;
  height: 50px;
  background: #C4D2FF;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 2px 1px 4px rgba(0,0,0,0.16); 
`