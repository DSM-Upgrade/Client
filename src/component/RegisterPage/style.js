import styled from "styled-components";
import selectboxArrow from "../../assets/LoginPage/selectboxArrow.png";
import backgroundTriangle1 from "../../assets/LoginPage/backgroundTriangle1.png";
import backgroundTriangle2 from "../../assets/LoginPage/backgroundTriangle2.png";
import backgroundTriangle3 from "../../assets/LoginPage/backgroundTriangle3.png";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const MainBox = styled.div`
  position: relative;
  background-color: #f8fbff;
  width: 82%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .backgroundTriangle div{
    position: absolute;
  }
  .backgroundTriangle div:nth-child(1) {
    width: 330px;
    height: 284.88px;
    background-image: url(${backgroundTriangle1});
    left: -5.7%;
    bottom: -5%;
  }
  .backgroundTriangle div:nth-child(2) {
    width: 328.65px;
    height: 284.88px;
    background-image: url(${backgroundTriangle2});
    left: 20%;
    bottom: 42%;
  }
  .backgroundTriangle div:nth-child(3) {
    width: 473px;
    height: 615px;
    background-image: url(${backgroundTriangle3});
    left: 44%;
    bottom: 21%;
  }
`;

const RegisterBox = styled.div`
  width: 600px;
  height: 561px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 30;
  h1 {
    font-family: "고도 M";
    font-size: 70px;
    color: #707070;
  }
  .firstLine {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 28px;
  }
  .firstLine input:nth-child(-n + 3) {
    width: 45%;
  }
  .firstLine input:nth-child(n + 2) {
    margin-left: 22px;
  }
  .firstLine input:nth-child(4) {
    width: 216px;
  }
  input {
    width: 95%;
    height: 62px;
    border-radius: 7px;
    border: solid 1px #3b87ee;
    font-size: 28px;
    font-family: "고도 M";
    color: #707070;
    padding-left: 26px;
  }
  input::placeholder {
    font-size: 28px;
    color: #bcbcbc;
    font-family: "고도 M";
  }
  input:focus,
  button:focus {
    outline: none;
  }
  .anotherLine input {
    margin-top: 15px;
  }
  button {
    background-color: #3b87ee;
    width: 100%;
    margin-top: 29px;
    margin-bottom: 18px;
    border-radius: 13px;
    height: 82px;
    font-size: 31px;
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
  select {
    width: 100%;
    height: 62px;
    background: url(${selectboxArrow}) no-repeat 95% 50%;
    background-color: #ffffff;
    border-radius: 7px;
    border: solid 1px #3b87ee;
    font-size: 28px;
    font-family: "고도 M";
    color: #707070;
    padding-left: 26px;
    margin-top: 14px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select:focus{
    outline: none;
  }
  option {
    background-color: #deecff;
  }
`;
export { MainWrapper, MainBox, RegisterBox };
