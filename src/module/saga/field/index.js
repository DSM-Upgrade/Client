import { call, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithBodyWithoutToken,
} from "../../../lib/requestApi";
import { FIELD_ACTION_CREATERS } from "../../action/field";

function* fetchFields() {
  try {
    const REQUEST_URL = myPageApi.field();
    const HTTP_METHOD = methodType.GET;

    const res = yield call(
      requestApiWithBodyWithoutToken,
      REQUEST_URL,
      HTTP_METHOD
    );

    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

function* fieldSaga() {
  const { fetchFieldsSaga } = FIELD_ACTION_CREATERS;

  yield takeLatest(fetchFieldsSaga, fetchFields);
}

export default fieldSaga;
