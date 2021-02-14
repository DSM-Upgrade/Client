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

export const FileBox = styled.div``;

export const FileLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 32px;
  color: #ffffff;
  background: #3b87ee;
  border: none;
  border-radius: 16px;
`;

export const ModifyButton = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
