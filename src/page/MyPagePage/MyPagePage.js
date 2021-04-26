import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import { fieldActionCreaters } from "../../module/action/field";
import { loginUserActionCreaters } from "../../module/action/loginUser";

import * as S from "./style";

import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import MyPageContanier from "../../container/MyPageContanier/MyPageContanier";

const MyPagePage = () => {
  const dispatch = useDispatch();

  const { fetchFieldsSaga } = fieldActionCreaters;
  const { fetchStdInfoSaga } = loginUserActionCreaters;

  const dispatchFetchFieldSaga = useCallback(() => {
    dispatch(fetchFieldsSaga());
  }, [dispatch]);
  const dispatchFetchStdInfoSaga = useCallback(() => {
    dispatch(fetchStdInfoSaga());
  }, [dispatch]);

  useEffect(() => {
    dispatchFetchFieldSaga();
    dispatchFetchStdInfoSaga();
  }, []);

  return (
    <S.Container>
      <HeaderContainer />
      <MyPageContanier />
    </S.Container>
  );
};

export default MyPagePage;
