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
  margin-bottom: 1.25rem;
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

export const FileBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileInputWrap = styled.div`
  margin-bottom: 0.625rem;
`;

export const FileLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  color: #ffffff;
  background: #3b87ee;
  border: none;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: #639ceb;
  }
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

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  color: #3b87ee;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #deecff;

  &:hover {
    cursor: pointer;
    background: #bfd6f5;
  }
`;
