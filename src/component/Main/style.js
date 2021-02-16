import styled from 'styled-components'  

export const Main = styled.div`
  display: flex;
`

export const Container = styled.div`
  display: block;
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
  position: relative;
  width: 100%;
  height: 100%;
  background: #f8fbff url(${(props) => props.img}) no-repeat 50% 80%;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  margin: 0 auto;
`