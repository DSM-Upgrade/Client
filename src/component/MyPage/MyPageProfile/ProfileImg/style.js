import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 360px;
  border-radius: 16px;
  background: #f8f8f8;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 218px;
  height: 338px;
  border-radius: 16px;
  background: #ffffff;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ModifyButton = styled.button`
  width: 84px;
  height: 32px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 16px;
  background: #3b87ee;
`;
