import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithToken,
} from "../../../lib/requestApi";

import { loginUserActions } from "../../action/loginUser";

function* fetchStdInfo() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = myPageApi.stdInfo();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { FETCH_STD_INFO_SAGA_SUCCESS } = loginUserActions;

    yield put({
      type: FETCH_STD_INFO_SAGA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* loginUserSaga() {
  const { FETCH_STD_INFO_SAGA } = loginUserActions;

  yield takeLatest(FETCH_STD_INFO_SAGA, fetchStdInfo);
}

export default loginUserSaga;
