import styled from "styled-components";
import TrashImage from "../../../assets/homework/trash.png";
import FileClip from "../../../assets/homework/kisspng-paper-clips-project-clip-art-paperclips-5b519afde5c9f1.4374388715320747499412.png";

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

export const SettingBox = styled.div`
  position: absolute;
  top: 200px;
  left: -4px;
  width: 85%;
  height: 6%;
  display: flex;
  justify-content: flex-end;
  margin: 0 0 30px 100px;
  a {
    text-decoration: none;
  }
  a > p {
    font-size: 20px;
    font-family: "고도 M";
    color: #393838;
  }
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
  .adminListWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    table-layout: fixed;
  }
`;

export const AllocationBox = styled.div`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div:nth-child(1) > div {
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
    /* margin: 0 27px 0 65px; */
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  div:nth-child(2) {
    width: 570px;
    & > p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    /* margin-right: 80px; */
  }
  .trashLink {
    width: 20px;
    height: 20px;
  }
  .trashImage {
    z-index: 10;
    width: 20px;
    height: 20px;
    background-image: url(${TrashImage});
  }
  #clipImage {
    width: 30px;
    height: 30px;
    background-image: url(${FileClip});
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

export const SubmissionBox = styled.div`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div:nth-child(1) > div {
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
    /* margin: 0 27px 0 65px; */
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  div:nth-child(2) {
    width: 570px;
    & > p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    /* margin-right: 80px; */
  }
  .trashLink {
    width: 20px;
    height: 20px;
  }
  .trashImage {
    z-index: 10;
    width: 20px;
    height: 20px;
    background-image: url(${TrashImage});
  }
  #clipImage {
    width: 30px;
    height: 30px;
    background-image: url(${FileClip});
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

export const UnsubmittedBox = styled.div`
  width: 86%;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  div:nth-child(1) > div {
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
    /* margin: 0 27px 0 65px; */
  }
  p {
    font-size: 24px;
    font-family: "고도 M";
  }
  div:nth-child(2) {
    width: 570px;
    & > p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    /* margin-right: 80px; */
  }
  .trashLink {
    width: 20px;
    height: 20px;
  }
  .trashImage {
    z-index: 10;
    width: 20px;
    height: 20px;
    background-image: url(${TrashImage});
  }
  #clipImage {
    width: 30px;
    height: 30px;
    background-image: url(${FileClip});
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
