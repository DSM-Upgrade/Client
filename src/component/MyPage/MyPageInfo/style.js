import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: calc(100% - 240px);
  padding: 120px 0;
`;

export const InfoBackground = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 400px;
  height: 360px;
  padding: 20px 10px;
  border: none;
  border-radius: 16px;
  background: #ffffff;
`;
