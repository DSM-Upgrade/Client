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
  justify-content: space-between;
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

`

export const Grade = styled.div`
  width: 32%;
  height: 100%;
  background: #ccc;
`

export const Text = styled.p`
  margin-top: -10px;
  font-size: 16px;
  color: #363944;
`