import styled from "styled-components";

export const Container = styled.div`
  width: 640px;
  height: 80vh;
  border: 1px solid #707070;
  border-radius: 9px;
  padding: 24px 34px;
  background: #ffffff;
  box-sizing: border-box;
`;

export const Title = styled.p`
  width: 100%;
  color: #393838;
  font-size: 40px;
  text-align: center;
  border-bottom: 1px solid #3987ee;
  padding: 0 0 28px 0;
`;

export const FineBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 96px);
  padding: 26px 0 0 0;

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
  display: grid;
  grid-template-columns: 130px 1fr 100px;
  height: 27px;
  align-items: center;
  margin-bottom: 11px;
`;

export const ItemText = styled.p`
  color: #393838;
  font-size: 20px;
  text-align: ${(props) => props.textAlign || "left"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
