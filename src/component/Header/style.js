import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  height: 100%;
  width: 360.5px;
  background-color: #ffffff;
  border-right: solid #707070 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBox = styled.div`
  width: 272px;
  height: 171px;
  margin: 194px 55px 0px 33px;
`;

const LogoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.Login ? "flex-start" : "flex-end")};
  flex-direction: ${(props) => (props.Login ? "column" : "")};
  a > p {
    font-size: 16px;
    cursor: pointer;
  }
`;

const Text = styled.p`
  display: inline-block;
  font-size: ${(props) => (props.Title ? "60px" : "24px")};
  font-family: ${(props) => (props.Title ? "고도 B" : "고도 M")};
  color: ${(props) => (props.Blue ? "#3987EE" : "#393838")};
`;

const Nav = styled.div`
  width: 174px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a {
    font-family: "고도 M";
    font-size: 35px;
    color: #393838;
  }
  a:nth-child(n + 2) {
    margin-top: 60px;
  }
`;

const DesignBox = styled.div`
  width: 254px;
  height: 64px;
  div {
    height: 33.3333333333333333333%;
  }
  div:nth-child(1) {
    width: 50%;
    background-color: #3987ee;
  }
  div:nth-child(2) {
    width: 70%;
    background-color: #3073cc;
  }
  div:nth-child(3) {
    width: 100%;
    background-color: #1862c2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export { Header, MainBox, Text, LogoBox, Nav, DesignBox, Container };
