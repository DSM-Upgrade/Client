import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8fbff url(${(props) => props.img}) no-repeat 90% 10% / 20%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  width: 100%;
  height: 100%;
`;
