import { call, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithoutToken,
} from "../../../lib/requestApi";
import { FIELD_ACTIONS } from "../../action/field";

function* fetchFields() {
  try {
    const REQUEST_URL = myPageApi.field();
    const HTTP_METHOD = methodType.GET;

    // const res = yield call(
    //   requestApiWithoutBodyWithoutToken,
    //   HTTP_METHOD,
    //   REQUEST_URL
    // );

    // console.log(res);
  } catch (error) {
    console.error(error);
  }
}

function* fieldSaga() {
  const { FETCH_FIELDS_SAGA } = FIELD_ACTIONS;

  yield takeLatest(FETCH_FIELDS_SAGA, fetchFields);
}

export default fieldSaga;
