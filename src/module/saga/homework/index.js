import { call, put, takeLatest } from "redux-saga/effects";

import { homeworkApi, myPageApi } from "../../../lib/Api";
import {
  requestApiWithoutBodyWithToken,
  requestApiWithBodyWithToken,
  methodType,
} from "../../../lib/requestApi";

import { homeworkActions } from "../../action/homework/index";

function* getHomeworkList() {
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

function* gethomeworkContent(action) {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getHomeworkContent(action.payload);

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_HOMEWORK_CONTENT } = homeworkActions;

    yield put({
      type: GET_HOMEWORK_CONTENT,
      payload: res.data,
    });

    console.log(`content받아옴`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

function* homeworkSaga() {
  const { GET_HOMEWORK_LIST_SAGA, GET_HOMEWORK_CONTENT_SAGA } = homeworkActions;

  yield takeLatest(GET_HOMEWORK_LIST_SAGA, getHomeworkList);
  yield takeLatest(GET_HOMEWORK_CONTENT_SAGA, gethomeworkContent);
}

export default homeworkSaga;
