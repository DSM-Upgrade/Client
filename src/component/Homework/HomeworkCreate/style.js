import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  .Title > * {
    font-family: "고도 B";
    margin: 104px 0 77.5px 96.5px;
    width: 85%;
    z-index: 1;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fbff;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SectionContainer = styled.div`
  width: 810px;
  height: 770px;
  display: flex;
  flex-direction: column;
`;

export const SectionHeaderContainer = styled.form`
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #000000;
  header {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "고도 M";
    margin: 0 2px;
    input:nth-child(1) {
      width: 42%;
      font-size: 44px;
      border: none;
      background-color: transparent;
      font-family: "고도 M";
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: black;
      }
    }
  }
  section {
    font-family: "고도 M";
    textarea:nth-child(1) {
      margin: 25px 0 38px 0;
      width: 770px;
      height: 156px;
      font-size: 20px;
      font-family: "고도 M";
      padding: 20px 20px;
      &::placeholder {
        font-size: 20px;
        font-family: "고도 M";
        color: black;
      }
    }
    .memberTitle {
      font-size: 20px;
      margin-bottom: 16px;
    }
    .checkWrapper {
      width: 810px;
      height: 315px;
      margin-bottom: 60px;
      background-color: #fff;
      border: 1px solid black;
      overflow-y: scroll;
      overflow-x: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      input[type="checkbox"] {
        width: 15px;
        height: 15px;
        margin: 0 33px 0 28px;
      }
      div {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        font-size: 20px;
        p:nth-child(3) {
          margin: 0 19px 0 19px;
        }
        border-bottom: #707070 1px solid;
      }
    }
    input[type="submit"] {
      width: 139px;
      height: 52px;
      font-size: 20px;
      background-color: #c4e3ff;
      border: none;
      box-shadow: 2px 2px 4px 0px grey;
      font-family: "고도 M";
    }
  }
  .dayWrapper {
    display: flex;
    align-items: center;
    width: calc(100%-42%);
    .inputTimeWrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    input {
      margin-left: 11px;
      width: 150px;
      height: 43px;
      &::placeholder {
        font-size: 20px;
        font-family: "고도 M";
      }
    }
    p {
      font-size: 20px;
    }
  }
`;
