import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
  background: #242834;
`

export const MemberWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 97%;
  height: 80%;
  /* background: #aaa; */
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: 20%;
  border-top: solid 1px #363944;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.25rem;
  height: 70%;
`

export const Icon = styled.img`
  cursor: pointer;
`

export const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 90%;
`

export const Line = styled.div`
  width: 1px;
  height: 80%;
  background: #363944;
`

export const GradeBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
  color: #D1D1D1;
  font-size: 20px;
`

export const MemberBox = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 80%;
  color: #D1D1D1;
`

export const Text = styled.p`
  margin-top: -10px;
  font-size: 16px;
  color: #363944;
`