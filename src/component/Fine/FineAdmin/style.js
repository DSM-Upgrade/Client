import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 200px 1fr;
  height: 100%;
`;

export const NameTitle = styled.p`
  line-height: 70px;
  color: #393838;
  font-size: 40px;
`;

export const AddFine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 900px;
  height: 180px;
  border: none;
  border-radius: 9px;
  padding: 29px 46px;
  background: #ffffff;
  box-sizing: border-box;
`;

export const TempGridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const TempFlexWrap = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  align-items: center;
`;

export const AddFineLabel = styled.label`
  width: max-content;
  color: #393838;
  font-size: 32px;
`;

export const AddFineSelect = styled.select`
  width: 100%;
  height: 48px;
  outline: none;
  border: 1px solid #9b9bff;
  border-radius: 5px;
  color: #393838;
  font-size: 24px;
  box-sizing: border-box;
`;

export const AddFineOption = styled.option``;

export const AddFineInput = styled.input`
  width: 100%;
  height: 48px;
  outline: none;
  border: 1px solid #9b9bff;
  border-radius: 5px;
  color: #393838;
  font-size: 24px;
  box-sizing: border-box;
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

export const ItemButton = styled.button`
  width: 105px;
  height: 35px;
  color: #ffffff;
  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 3px;
  background: #80b6ff;

  &:hover {
    cursor: pointer;
  }
`;
