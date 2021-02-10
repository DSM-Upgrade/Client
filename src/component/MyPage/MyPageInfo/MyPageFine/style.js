import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 30px 30px 1fr;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 18px;
  text-align: center;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
`;

export const FineBox = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #707070;
    border-radius: 6px;
  }
`;

export const FineItem = styled.div`
  width: 100%;
  margin: 3px;
`;
