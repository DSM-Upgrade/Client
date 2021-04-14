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
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  overflow: scroll;
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    table-layout: fixed;
  }
`;

export const AllocationBox = styled.tr`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 46px;
    border-radius: 23px;
    background-color: #ffffff;
    border: #707070 solid 1px;
    font-size: 24px;
    font-family: "고도 M";
    margin: 0 27px 0 65px;
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  td:nth-child(2) {
    width: 570px;
    margin-right: 80px;
  }
  td:nth-child(3) {
    margin: 0 200px 0 0;
  }
  &:hover {
    background-color: #dcecf9;
  }
  &:active {
    background-color: #dcecf9;
  }
  &:link {
    background-color: #dcecf9;
  }
`;

export const SubmissionBox = styled.tr`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div {
    color: #ffffff;
    background-color: #3987ee;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 46px;
    border-radius: 23px;
    font-size: 24px;
    font-family: "고도 M";
    margin: 0 27px 0 65px;
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  td:nth-child(2) {
    width: 570px;
    margin-right: 80px;
  }
  td:nth-child(3) {
    margin: 0 200px 0 0;
  }
  &:hover {
    background-color: #dcecf9;
  }
  &:active {
    background-color: #dcecf9;
  }
  &:link {
    background-color: #dcecf9;
  }
`;

export const UnsubmittedBox = styled.tr`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div {
    color: #ffffff;
    background-color: #ff4646;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 46px;
    border-radius: 23px;
    font-size: 24px;
    font-family: "고도 M";
    margin: 0 27px 0 65px;
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  td:nth-child(2) {
    width: 570px;
    margin-right: 80px;
  }
  td:nth-child(3) {
    margin: 0 200px 0 0;
  }
  &:hover {
    background-color: #dcecf9;
  }
  &:active {
    background-color: #dcecf9;
  }
  &:link {
    background-color: #dcecf9;
  }
`;
