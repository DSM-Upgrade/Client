import { call, put, takeLatest } from "redux-saga/effects";

import { adminApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithToken,
} from "../../../lib/requestApi";

import { adminActions } from "../../action/admin";

function* fetchAuthList() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = adminApi.getAuthList();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { FETCH_AUTH_LIST_SAGA_SUCCESS } = adminActions;

    console.log(res);

    yield put({
      type: FETCH_AUTH_LIST_SAGA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* fetchAuthAccess(action) {
  try {
    const { id } = action.payload;

    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = adminApi.accessAuth();
    const REQUEST_BODY = {
      id,
    };

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function* adminSaga() {
  const { FETCH_AUTH_LIST_SAGA, FETCH_AUTH_ACCESS_SAGA } = adminActions;

  yield takeLatest(FETCH_AUTH_LIST_SAGA, fetchAuthList);
  yield takeLatest(FETCH_AUTH_ACCESS_SAGA, fetchAuthAccess);
}

export default adminSaga;
