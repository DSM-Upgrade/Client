import React from "react";
import styled from "styled-components";
import Mypage from "../../component/MyPage/MyPage";

const TempWrap = styled.div`
  margin-left: 20%;
  width: 80%;
  height: 100%;
`;

const MyPageContanier = () => {
  const CONSTANT_DATA = {
    name: "최아린",
    grade: 3,
    class: 4,
    number: 15,
    username: "cutyapple",
    field: {
      id: 1,
      name: "프론트엔드",
    },
    profile: "cutyapple",
  };

  return (
    <TempWrap>
      <Mypage data={CONSTANT_DATA} />
    </TempWrap>
  );
};

export default MyPageContanier;
