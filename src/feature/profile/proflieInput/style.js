import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  color: #404040;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0px 0.625rem;
  background: transparent;
`;

export const Label = styled.label`
  min-width: 4rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: right;
`;

export const ModifySpan = styled.span`
  min-width: 32px;
  color: #3b87ee;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: #639ceb;
  }
`;
