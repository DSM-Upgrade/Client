import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fbff;
  width: 100%;
  height: 100%;
  div:nth-child(1) {
    font-family: "고도 B";
    margin-top: 104px;
    margin-left: 96.5px;
    width: 85%
  }
`;

export const Wrapper = styled.div`
  margin-left: 96.5px;
  margin-top: 91.5px;
  width: 85%;
  height: 100%;
`;
