import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f8fbff;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 93px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 154px;
  box-sizing: border-box;
  background-color: #e5eeff;
  font-family: "고도 M";
  h1 {
    margin-top: 49px;
    font-size: 32px;
    margin-left: 46px;
  }
  p {
    margin-top: 11px;
    font-size: 16px;
    margin-left: 46px;
    color: #707070;
  }
`;

export const MainTextContainer = styled.div`
  width: 100%;
  height: 648px;
  padding: 60px 0 0 50px;
  border: #BEC9FF solid 1px;
  box-sizing: border-box;
  font-size: 20px;
  color :#393838;
  font-family: "고도 M";
`;