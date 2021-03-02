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
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
`;

export const AllocationBox = styled.div`
  width: 85%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 46px;
    border-radius: 23px;
    border: #707070 solid 1px;
    font-size: 24px;
    font-family: "고도 M";
    margin: 0 27px 0 65px;
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  p:nth-child(2) {
    margin-right: 527px;
  }
  p:nth-child(3) {
    margin-right: 300px;
  }
  &:hover {
    background-color: #DCECF9;
  }
  &:active {
    background-color: #DCECF9;
  }
  &:link{
    background-color: #DCECF9;
  }
`;

export const SubmissionBox = styled.div`
  width: 85%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  div {
    color: #FFFFFF;
    background-color: #3987EE;
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
  p:nth-child(2) {
    margin-right: 527px;
  }
  p:nth-child(3) {
    margin-right: 300px;
  }
  &:hover {
    background-color: #DCECF9;
  }
  &:active {
    background-color: #DCECF9;
  }
  &:link{
    background-color: #DCECF9;
  }
`;

export const UnsubmittedBox = styled.div`
  width: 85%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  div {
    color: #FFFFFF;
    background-color: #FF4646;
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
  p:nth-child(2) {
    margin-right: 527px;
  }
  p:nth-child(3) {
    margin-right: 300px;
  }
  &:hover {
    background-color: #DCECF9;
  }
  &:active {
    background-color: #DCECF9;
  }
  &:link{
    background-color: #DCECF9;
  }
`;
