import React from "react";
import MyPageAuth from "../../../component/MyPage/MyPageAuth/MyPageAuth";

const MyPageAuthContainer = () => {
  const authList = [
    {
      stdNum: "3415",
      name: "유시온",
      id: "1",
    },
    {
      stdNum: "3415",
      name: "유시온2",
      id: "2",
    },
    {
      stdNum: "3415",
      name: "유시온3",
      id: "3",
    },
    {
      stdNum: "3415",
      name: "유시온4",
      id: "4",
    },
  ];

  return <MyPageAuth authList={authList} />;
};

export default MyPageAuthContainer;
