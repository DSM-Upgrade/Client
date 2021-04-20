import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithToken,
} from "../../../lib/requestApi";

import { myPageActions } from "../../action/myPage";

function* getStdInfo() {
  try {
    const { GET_STD_INFO_SAGA_SUCCESS } = myPageActions;

    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = myPageApi.stdInfo();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    yield put({
      type: GET_STD_INFO_SAGA_SUCCESS,
      payload: res.data,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function* myPageSaga() {
  const { GET_STD_INFO_SAGA } = myPageActions;

  yield takeLatest(GET_STD_INFO_SAGA, getStdInfo);
}

export default myPageSaga;
