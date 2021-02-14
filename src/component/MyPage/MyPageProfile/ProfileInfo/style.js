import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 420px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InfoName = styled.label`
  width: 100px;
  height: 44px;
  color: #000000;
  font-size: 24px;
  text-align: right;
  line-height: 44px;
`;

export const InfoValue = styled.input`
  width: 100%;
  height: 44px;
  color: #000000;
  font-size: 24px;
  outline: none;
  border: 1px solid #eef0f2;
  border-radius: 8px;
  padding: 6px 0px 6px 10px;
  margin-left: 22px;
`;

export const FieldSelect = styled.select`
  width: 100%;
  height: 58px;
  color: #000000;
  font-size: 24px;
  outline: none;
  border: 1px solid #eef0f2;
  border-radius: 8px;
  padding: 6px 0px 6px 10px;
  margin-left: 22px;
`;

export const Field = styled.option``;

export const ModifyButton = styled.button`
  width: 84px;
  height: 32px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 16px;
  background: #3b87ee;
  margin-left: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const CompleteButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CompleteButton = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 168px;
  height: 48px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 12px;
  background: #3b87ee;

  transition: background 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background: #5c9ffa;
  }
`;
