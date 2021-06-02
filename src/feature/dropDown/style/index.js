import styled, { css, keyframes } from "styled-components";

const DropDownFadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
  }
`;

const DropDownFadeOut = keyframes`
  0% {
    opacity: 1;
    height: 100%;
  }
  100% {
    opacity: 0;
  }
`;

export const DropDownWrapper = styled.div`
  width: 100%;
`;

export const DropDownSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 1.875rem;
`;

export const SelectDropDownItemWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1.25rem;
  padding: 0.3125rem 0.625rem;
  border: 0.0625rem solid #707070;
  border-radius: 0.375rem;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 0.0625rem solid transparent;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `}

  background: transparent;

  & > span {
    margin-right: 0.3125rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectDropDownItem = styled.span`
  display: flex;
  justify-content: center;
  color: #2f2f2f;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SelectDropDownArrow = styled.img`
  height: 0.625rem;

  transition: transform 0.3s ease-in-out;
  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
    `}
`;

export const DropDownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.875rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  ${(props) =>
    props.firstLoading &&
    css`
      opacity: 0;
      animation: none !important;
    `}
  ${(props) =>
    props.active
      ? css`
          height: ${(props) => `calc(${props.itemLength} * 1.875rem)`};
          border: 0.0625rem solid #707070;
          border-top: 0.0625rem solid transparent;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
          animation: 0.3s ${DropDownFadeIn} ease-in-out;
        `
      : css`
          height: 0;
          border: none;
          animation: 0.3s ${DropDownFadeOut} ease-in-out;
        `}
`;

export const DropDownItem = styled(SelectDropDownItem)`
  display: flex;
  justify-content: flex-start;
  height: 1.25rem;
  padding: 0.3125rem 0.625rem;
  background: transparent;
  font-weight: 500;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #e0e0e0;
  }
`;
