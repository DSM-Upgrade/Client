import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 100px 1fr;
  height: 100%;
`;

export const NameTitle = styled.p`
  line-height: 70px;
  color: #393838;
  font-size: 40px;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FineSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TextWrap = styled.div`
  display: flex;
`;

export const GeneralText = styled.p`
  color: #393838;
  font-size: 20px;
`;

export const ColorText = styled.p`
  color: #3987ee;
  font-size: 20px;
  padding: 0 0 0 5px;
`;

export const FineModalButton = styled.button`
  width: 180px;
  height: 60px;
  color: #ffffff;
  font-size: 25px;
  outline: none;
  border: none;
  border-radius: 7px;
  background: #3987ee;

  &:hover {
    cursor: pointer;
  }
`;

export const FineBox = styled.div`
  background: #eef5ff;

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
  grid-template-columns: 100px 1fr 100px 200px 180px;
  padding: 30px 40px;
  border-bottom: 1px solid #bad7ff;
`;

export const ItemText = styled.p`
  color: #393838;
  font-size: 24px;
  text-align: ${(props) => props.textAlign || "left"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
