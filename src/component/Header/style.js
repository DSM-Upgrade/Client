import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  height: 100%;
  width: 360.5px;
  background-color: #ffffff;
  border-right: solid #707070 1px;
`;

const MainBox = styled.div`
  width: 272px;
  height: 171px;
  margin: 194px 55px 0px 33px;
`;

const LogoTitleBox = styled.div`
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

export { Header, MainBox, Text, LogoTitleBox };
