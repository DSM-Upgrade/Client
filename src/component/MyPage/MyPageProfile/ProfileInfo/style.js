import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 100%;
  height: 360px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InfoName = styled.p`
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
