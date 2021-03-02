import styled from "styled-components";
import AllocationBoxBackground from "../../assets/homework/AllocationBoxImg.png";
import SubmissionBoxBackground from "../../assets/homework/SubmissionBoxImg.png";
import UnsubmittedBoxBackground from "../../assets/homework/UnsubmittedBoxImg.png";
import BackgroundImg from "../../assets/homework/backgroundImg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fbff;
  position: relative;
  width: 100%;
  height: 100%;
  .Title > * {
    font-family: "고도 B";
    margin-top: 104px;
    margin-left: 96.5px;
    width: 85%;
    z-index: 1;
  }
  .BackgroundImg {
    position: absolute;
    width: 477.62px;
    height: 346.2px;
    background-image: url(${BackgroundImg});
    z-index: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Wrapper = styled.div`
  margin-left: 96.5px;
  margin-top: 91.5px;
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a{
    color: inherit;
    text-decoration:none;
  }
`;

export const AllocationBox = styled.div`
  position: relative;
  width: 400px;
  height: 333px;
  border-radius: 18px;
  background-image: url(${AllocationBoxBackground});
  background-size: cover;
  h1 {
    font-size: 28px;
    padding: 21px 0 30px;
  }
  h1,
  h4 {
    font-family: "고도 B";
  }
  p,
  h1,
  h4 {
    padding-left: 25px;
  }
  p {
    font-size: 20px;
    font-family: "고도 M";
    padding-top: 4px;
  }
  p:nth-child(2) {
    padding: 0 0 102px 25px;
    max-width: 85%;
  }
  h4 {
    font-size: 16px;
    position: absolute;
    left: 78%;
    bottom: 9%;
  }
`;

export const SubmissionBox = styled.div`
  position: relative;
  width: 400px;
  height: 333px;
  border-radius: 18px;
  background-image: url(${SubmissionBoxBackground});
  background-size: cover;
  h1 {
    font-size: 28px;
    padding: 21px 0 30px;
  }
  h1,
  h4 {
    font-family: "고도 B";
  }
  p,
  h1,
  h4 {
    padding-left: 25px;
  }
  p {
    font-size: 20px;
    font-family: "고도 M";
    padding-top: 4px;
  }
  p:nth-child(2) {
    padding: 0 0 102px 25px;
    max-width: 85%;
  }
  h4 {
    font-size: 16px;
    position: absolute;
    left: 78%;
    bottom: 9%;
  }
`;

export const UnsubmittedBox = styled.div`
  position: relative;
  width: 400px;
  height: 333px;
  border-radius: 18px;
  background-image: url(${UnsubmittedBoxBackground});
  background-size: cover;
  h1 {
    font-size: 28px;
    padding: 21px 0 30px;
  }
  h1,
  h4 {
    font-family: "고도 B";
  }
  p,
  h1,
  h4 {
    padding-left: 25px;
  }
  p {
    font-size: 20px;
    font-family: "고도 M";
    padding-top: 4px;
  }
  p:nth-child(2) {
    padding: 0 0 102px 25px;
    max-width: 85%;
  }
  h4 {
    font-size: 16px;
    position: absolute;
    left: 78%;
    bottom: 9%;
  }
`;
