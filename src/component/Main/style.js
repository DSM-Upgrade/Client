import styled from 'styled-components'  

export const Main = styled.div`
  display: flex;
`

export const Container = styled.div`
  position: relative;
  width: 97.5rem;
  height :100vh;
  background: #F8FBFF;
`

export const Inner = styled.div`
  position: relative;
  height: 70%;
  background: #F8FBFF;
`

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background: #f8fbff url(${(props) => props.img}) no-repeat 50% 80%;
`;

export const Glass = styled.div`
  position: absolute;
  width: 94rem;
  height: 40rem;
  background: #AEB9D4;
  opacity: 0.12;
  top:0;
  margin: 32px 26px;
  border-radius: 12px;
`