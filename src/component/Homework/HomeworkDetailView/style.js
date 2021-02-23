import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8fbff;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 68%;
  height: 94px;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #000000;
  margin-top: 50px;
  .Wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .Wrapper > p {
    font-size: 20px;
    font-family: "고도 M";
  }
  h1 {
    font-size: 44px;
    font-family: "고도 M";
    margin-bottom: 12px;
  }
`;

export const MainSection = styled.div`
  margin-top: 25px;
  width: 68%;
  height: 810px;
  textarea {
    width: 100%;
    height: 625px;
    display: flex;
    justify-content: none;
    padding: 5px 0 0 12px;
    font-size: 28px;
    font-family: "고도 M";
  }
  textarea:focus {
    outline: none;
  }
  button {
    width: 139px;
    height: 52px;
    background-color: #c4e3ff;
    border-radius: 4px;
    font-size: 20px;
    font-family: "고도 B";
    border: none;
    margin-top: 19px;
  }
  button:focus{
    outline: none;
  }
  .submitBox{
    width: 100%;
    display:flex;
    flex-direction:column;
    margin-top: 10px;
  }
  .secondBox{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
