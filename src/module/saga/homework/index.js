import { call, put, takeLatest } from "redux-saga/effects";

import { homeworkApi, myPageApi } from "../../../lib/Api";
import {
  requestApiWithoutBodyWithToken,
  requestApiWithBodyWithToken,
  methodType,
} from "../../../lib/requestApi";

import { homeworkActions } from "../../action/homework/index";

function* getHomeworkList(action) {
  console.log(action.payload);
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getHomeworkList();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_HOMEWORK_LIST } = homeworkActions;

    yield put({
      type: GET_HOMEWORK_LIST,
      payload: res.data,
    });
    console.log(`리스트 받아옴`);
  } catch (error) {
    console.log(error);
  }
}

function* homeworkSaga() {
  const { GET_HOMEWORK_LIST_SAGA } = homeworkActions;

  yield takeLatest(GET_HOMEWORK_LIST_SAGA, getHomeworkList);
}

export default homeworkSaga;
