import styled from "styled-components";
import Login from "../../assets/LoginPage/backgroundImg.png";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  .behind {
    width: 360.5px;
    height: 100%;
  }
`;

const MainBox = styled.div`
  position: relative;
  background-color: #f8fbff;
  width: 82%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  div {
    border-radius: 100%;
    position: absolute;
  }
  div:nth-child(2) {
    width: 389px;
    height: 389px;
    background-color: #0a65e1;
    left: 16%;
    bottom: 12%;
  }
  div:nth-child(3) {
    width: 213px;
    height: 213px;
    background-color: #abc8ef;
    left: 63%;
    bottom: 53%;
    z-index: 1;
  }
  div:nth-child(4) {
    width: 282px;
    height: 282px;
    background-color: #3b87ee;
    left: 70%;
    bottom: 38%;
  }
`;

const LoginBox = styled.div`
  width: 585px;
  height: 512px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;
  h1 {
    color: #707070;
    font-size: 70px;
    margin-bottom: 37px;
    font-family: "고도 M";
  }
  input {
    width: 94%;
    height: 76px;
    border: solid #3b87ee 1px;
    border-radius: 13px;
    font-size: 32px;
    padding-left: 30px;
    color: #707070;
  }
  input::placeholder {
    font-size: 32px;
    color: #bcbcbc;
    font-family: "고도 M";
  }
  input:nth-child(3) {
    margin-top: 23px;
  }
  input:focus,
  button:focus {
    outline: none;
  }
  button {
    background-color: #3b87ee;
    width: 100%;
    margin-top: 93px;
    margin-bottom: 18px;
    border-radius: 13px;
    height: 82px;
    font-size: 40px;
    font-family: "고도 M";
    border: none;
    color: #ffffff;
    cursor: pointer;
  }
  a {
    font-size: 24px;
    font-family: "고도 M";
    color: #000000;
  }
  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
  }
`;

const LoginImg = styled.div`
  background-image: url(${Login});
  width: 539px;
  height: 455px;
  position: absolute;
  top: 60%;
  left: 66%;
`;

export { MainWrapper, MainBox, LoginBox, LoginImg };
