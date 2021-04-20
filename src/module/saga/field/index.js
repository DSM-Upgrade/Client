import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithoutToken,
} from "../../../lib/requestApi";

import { fieldActions } from "../../action/field";

function* fetchFields() {
  try {
    const { FETCH_FIELDS_SAGA_SUCCESS } = fieldActions;

    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = myPageApi.field();

    const res = yield call(
      requestApiWithoutBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    yield put({
      type: FETCH_FIELDS_SAGA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
}

function* fieldSaga() {
  const { FETCH_FIELDS_SAGA } = fieldActions;

  yield takeLatest(FETCH_FIELDS_SAGA, fetchFields);
}

export default fieldSaga;
