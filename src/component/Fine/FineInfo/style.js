import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 60px 1fr;
  height: 100%;
`;

export const NameTitle = styled.p`
  line-height: 70px;
  color: #393838;
  font-size: 40px;
`;

export const FineSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TextWrap = styled.div`
  display: flex;
`;

export const GeneralText = styled.p`
  color: #393838;
  font-size: 20px;
`;

export const ColorText = styled.p`
  color: #3987ee;
  font-size: 20px;
  padding: 0 0 0 5px;
`;

export const FineBox = styled.div`
  background: #eef5ff;
`;
