import React from "react";
import styled from "styled-components";
import Mypage from "../../component/MyPage/MyPage";

const TempWrap = styled.div`
  margin-left: 20%;
  width: 80%;
  height: 100%;
`;

const MyPageContanier = () => {
  return (
    <TempWrap>
      <Mypage />
    </TempWrap>
  );
};

export default MyPageContanier;
