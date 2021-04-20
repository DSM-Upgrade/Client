import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import MyPageContanier from "../container/MyPageContanier/MyPageContanier";
import { FIELD_ACTION_CREATERS } from "../module/action/field";

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
    <>
      <MyPageContanier />
    </>
  );
};

export default MyPagePage;
