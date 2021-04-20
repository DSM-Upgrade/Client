import styled from 'styled-components';

export const Item = styled.div`
  display: grid;
  grid-template-columns: 6.25rem 6.25rem 10fr 7.125rem 9.375rem;
  width: 100%;
  height: 5.7344rem;
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

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 100%;
`

export const Icon = styled.img`
  place-self: center;
  margin-right: 10px;
  src: ${props => props.src};

  :hover{
    transform: scale(1.08);
  }
`

export const Date = styled.div`
  align-self: center;
  font-size: 24px;
`