import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import { fieldActionCreaters } from "../../module/action/field";
import { myPageActionCreaters } from "../../module/action/myPage";

import * as S from "./style";

import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import MyPageContanier from "../../container/MyPageContanier/MyPageContanier";

const MyPagePage = () => {
  const dispatch = useDispatch();

  const { fetchFieldsSaga } = fieldActionCreaters;
  const { getStdInfoSaga } = myPageActionCreaters;

  const dispatchFetchFieldSaga = useCallback(() => {
    dispatch(fetchFieldsSaga());
  }, [dispatch]);
  const dispatchGetStdInfoSaga = useCallback(() => {
    dispatch(getStdInfoSaga());
  }, [dispatch]);

  useEffect(() => {
    dispatchFetchFieldSaga();
    dispatchGetStdInfoSaga();
  }, []);

  return (
    <S.Container>
      <HeaderContainer />
      <MyPageContanier />
    </S.Container>
  );
};

export default MyPagePage;
