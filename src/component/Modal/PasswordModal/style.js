import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  height: 400px;
  padding: 20px 40px;
  border: 1px solid #707070;
  border-radius: 8px;
  background: #eef0f2;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 32px;
  margin: 0 0 40px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 96%;
  height: 100%;
  margin: 0 auto;
`;

export const SubTitle = styled.p`
  color: #000000;
  font-size: 24px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 48px;
  color: #000000;
  font-size: 24px;
  outline: none;
  padding: 8px 10px;
  border: none;
  border-bottom: 1px solid #707070;
  background: none;
  box-sizing: border-box;

  &::placeholder {
    color: #707070;
  }
`;

export const ErrorText = styled.p`
  color: #ff7a7a;
  font-size: 16px;
  padding: 6px 0 0 6px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 140px;
  height: 45px;
  color: #ffffff;
  font-size: 32px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: ${(props) => props.background || "#3B87EE"};

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
