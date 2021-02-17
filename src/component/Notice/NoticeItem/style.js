import styled from 'styled-components';

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 10fr 50px 150px;
  width: 100%;
  height: 91.75px;
  cursor: pointer;
  :hover{
    background: #DCECF9;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  }
`

export const No = styled.div`
  place-self: center;
  font-size: 24px;
`

export const Type = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 46px;
  border: solid 1px #707070;
  border-radius: 50px;
  place-self: center;
  font-size: 24px;
`

export const Title = styled.div`
  align-self: center;
  font-size: 24px;
  padding-left: 30px;
`

export const File = styled.img`
  place-self: center;
`

export const Date = styled.div`
  align-self: center;
  font-size: 24px;
`