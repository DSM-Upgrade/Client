import { call, put, takeLatest } from "redux-saga/effects";

import { authApi } from "../../../lib/Api";

import {
  methodType,
  requestApiWithBodyWithoutToken,
  requestApiWithoutBodyWithoutToken,
} from "../../../lib/requestApi";

import { loginPageActions } from "../../action/loginPage/index";

function* authLogIn(action) {
  console.log(action.payload);
  try {
    const { username, password } = action.payload;

    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = authApi.login();
    const REQUEST_BODY = { username, password };

    const res = yield call(
      requestApiWithBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );

    const { SET_AUTH_TOKEN } = loginPageActions;

    yield put({
      type: SET_AUTH_TOKEN,
      payload: res.data,
    });
    console.log("성공");
  } catch (error) {
    console.log(error);
/*     const { status } = error.status;

    const invalidInputValue = () => {
      console.log(`값이 알맞은 값인지 다시 한번 확인해 주세요.`);
    };

    const invalidLoginInfo = () => {
      console.log(`아이디 또는 비밀번호가 틀렸습니다.`);
    };

    const studentNotRegistered = () => {
      console.log(`이 계정은 회원가입이 되어있지 않습니다.`);
    };

    switch (status) {
      case 400:
        invalidInputValue();
        break;
      case 401:
        invalidLoginInfo();
        break;
      case 403:
        studentNotRegistered();
        break;
      default: */
    }
}

function* authSignUp(action) {
  console.log(action);
  try {
    const { username, password, name, field_id, student_num } = action.payload;

    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = authApi.signUp();
    const REQUEST_BODY = { username, password, name, field_id, student_num };

    const res = yield call(
      requestApiWithBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );
    console.log("성공");
    alert(`회원가입에 성공했습니다.`);
  } catch (error) { 
    console.log(error);
    /* const { status } = error.data;

    const invalidInputValue = () => {
      alert(`값이 알맞은 값인지 다시 한번 확인해 주세요.`);
    };

    const fieldNotFound = () => {
      alert(`분야 칸의 입력을 확인해주세요`);
    };

    switch (status) {
      case 400:
        invalidInputValue();
        break;
      case 404:
        fieldNotFound();
        break;
      default:
    } */
  }
}

function* fetchAuthToken(action) {
  try {
    const { refresh_token } = action.payload;

    const HTTP_METHOD = methodType.PATCH;
    const REQUEST_URL = authApi.reAccessToken();
    const REQUEST_HEADER = { refresh_token };

    const res = yield call(
      requestApiWithoutBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_HEADER
    );

    const { FETCH_AUTH_TOKEN } = loginPageActions;

    yield put({
      type: FETCH_AUTH_TOKEN,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* loginPageSaga() {
  const {
    FETCH_AUTH_TOKEN_SAGA,
    AUTH_LOG_IN_SAGA,
    AUTH_SIGN_UP_SAGA,
  } = loginPageActions;

  yield takeLatest(AUTH_LOG_IN_SAGA, authLogIn);
  yield takeLatest(AUTH_SIGN_UP_SAGA, authSignUp);
  yield takeLatest(FETCH_AUTH_TOKEN_SAGA, fetchAuthToken);
}

export default loginPageSaga;
