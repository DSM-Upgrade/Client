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

export const MainSection = styled.form`
  margin-top: 25px;
  width: 68%;
  height: 810px;
  textarea {
    width: 99%;
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
  .button {
    width: 139px;
    height: 52px;
    background-color: #c4e3ff;
    border-radius: 4px;
    font-size: 20px;
    font-family: "고도 B";
    border: none;
    margin-top: 19px;
    box-shadow: 1px 2px 3px 0px #707070;
    cursor: pointer;
  }
  .button:focus {
    outline: none;
  }
  .submitBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .secondBox {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      cursor: pointer;
    }
  }
  .fileWrapper {
    display: flex;
    align-items: center;
    text-align: center;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #707070;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      width: 15%;
      height: 100%;
      font-size: 18px;
      font-family: "고도 B";
      cursor: pointer;
    }
    #fileName {
      background-color: #ffffff;
      width: 85%;
      height: 95.5%;
      border: #707070 solid 1px;
      font-family: "고도 M";
      padding-left: 10px;
    }
    input:nth-child(3) {
      display: none;
    }
  }
`;
