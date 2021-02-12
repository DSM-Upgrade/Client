import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 360px);
  padding: 180px 0;
`;

export const InfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 360px;
  padding: 20px 20px;
  border: 1px solid #eef0f2;
  border-radius: 16px;
  background: #ffffff;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 24px;
  margin: 0 0 10px 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #bad7ff;
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 0;
`;

export const AuthItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  padding: 3px 3px;
`;

export const AuthInfo = styled.p`
  color: #000000;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 106px;
`;

export const AuthButton = styled.button`
  width: 50px;
  height: 24px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  background: ${(props) => props.background || "#9FBCFF"};

  &:hover {
    cursor: pointer;
  }
`;
