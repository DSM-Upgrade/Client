import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { adminActionCreaters } from "../../../module/action/admin";

import MyPageAuth from "../../../component/MyPage/MyPageAuth/MyPageAuth";

const MyPageAuthContainer = () => {
  const dispatch = useDispatch();
  const { authList } = useSelector((state) => state.admin);

  const { fetchAuthListSaga } = adminActionCreaters;

  const getAuthList = () => {
    dispatch(fetchAuthListSaga());
  };

  useEffect(() => {
    getAuthList();
  }, []);

  return <MyPageAuth authList={authList} />;
};

export default MyPageAuthContainer;
