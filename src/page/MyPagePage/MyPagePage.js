import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import { FIELD_ACTION_CREATERS } from "../../module/action/field";

import * as S from "./style";

import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import MyPageContanier from "../../container/MyPageContanier/MyPageContanier";

const MyPagePage = () => {
  const dispatch = useDispatch();

  const { fetchFieldsSaga } = FIELD_ACTION_CREATERS;

  const dispatchFetchFieldSaga = useCallback(() => {
    dispatch(fetchFieldsSaga());
  }, [dispatch]);

  useEffect(() => {
    dispatchFetchFieldSaga();
  }, []);

  return (
    <S.Container>
      <HeaderContainer />
      <MyPageContanier />
    </S.Container>
  );
};

export default MyPagePage;
