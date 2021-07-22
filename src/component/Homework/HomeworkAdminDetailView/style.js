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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SettingBox = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    padding-left: 8px;
  }
  p:nth-child(3) {
    padding-right: 8px;
  }
`;

export const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  .fontFile {
    margin-top: 20px;
    width: 60px;
    font-size: 16px;
    color: #393838;
    padding-right: 11px;
    border-right: #707070 solid 1px;
  }
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
  border: #bec9ff solid 1px;
  box-sizing: border-box;
  font-size: 20px;
  color: #393838;
  font-family: "고도 M";
`;
