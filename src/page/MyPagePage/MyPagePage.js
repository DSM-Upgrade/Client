import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import { fieldActionCreaters } from "../../module/action/field";
import { loginUserActionCreaters } from "../../module/action/loginUser";
import { dropDownActionCreaters } from "../../module/action/dropDown";

import * as S from "./style";

import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import MyPageContanier from "../../container/MyPageContanier/MyPageContanier";

const MyPagePage = () => {
  const dispatch = useDispatch();

  const { fetchFieldsSaga } = fieldActionCreaters;
  const { fetchStdInfoSaga } = loginUserActionCreaters;
  const { fetchDefaultDropDownItemsSaga } = dropDownActionCreaters;

  const dispatchFetchFieldSaga = () => {
    dispatch(fetchFieldsSaga());
  };
  const dispatchFetchStdInfoSaga = () => {
    dispatch(fetchStdInfoSaga());
  };
  const getDefaultPropDownItemSaga = (dropDownKind) => {
    dispatch(fetchDefaultDropDownItemsSaga({ dropDownKind }));
  };

  useEffect(() => {
    dispatchFetchFieldSaga();
    dispatchFetchStdInfoSaga();
    getDefaultPropDownItemSaga("field");
  }, []);

  return (
    <S.Container>
      <HeaderContainer />
      <MyPageContanier />
    </S.Container>
  );
};

export default MyPagePage;
