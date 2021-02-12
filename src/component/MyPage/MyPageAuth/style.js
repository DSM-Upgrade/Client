import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 360px);
  padding: 180px 0;
`;

export const InfoBackground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 400px;
  height: 360px;
  padding: 20px 10px;
  border: 1px solid #eef0f2;
  border-radius: 16px;
  background: #ffffff;
`;
