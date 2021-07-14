import { call, put, takeLatest } from "redux-saga/effects";
import { setItem } from ".././../../utils/LocalStorageUtils";
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

    setItem("access_token", res.data.access_token);
    setItem("refresh_token", res.data.refresh_token);

    const { SET_AUTH_TOKEN } = loginPageActions;

    yield put({
      type: SET_AUTH_TOKEN,
      payload: res.data,
    });

    alert("로그인 성공");
    window.location.href = "/";
  } catch (error) {
    console.log(error);

    const { SET_LOGIN_INPUT_NULL } = loginPageActions;

    yield put({
      type: SET_LOGIN_INPUT_NULL,
      payload: true,
    });

    const invalidInputValue = () => {
      alert(`값이 알맞은 값인지 다시 한번 확인해 주세요.`);
    };

    const invalidLoginInfo = () => {
      alert(`아이디 또는 비밀번호가 틀렸습니다.`);
    };

    const studentNotRegistered = () => {
      alert(`이 계정은 회원가입이 되어있지 않습니다.`);
    };

    switch (error.status) {
      case 400:
        invalidInputValue();
        break;
      case 401:
        invalidLoginInfo();
        break;
      case 403:
        studentNotRegistered();
        break;
      default:
    }
  }
}

function* authSignUp(action) {
  console.log(action.payload);
  try {
    const { username, password, name, fieldId, student_num } = action.payload;
    const field_id = parseInt(fieldId);

    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = authApi.signUp();
    const REQUEST_BODY = { username, password, name, field_id, student_num };

    const res = yield call(
      requestApiWithBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );

    alert(`회원가입에 성공했습니다.`);
    window.location.href = "/login";
  } catch (error) {
    console.log(error);

    const { SET_REGISTER_INPUT_NULL } = loginPageActions;

    yield put({
      type: SET_REGISTER_INPUT_NULL,
      payload: true,
    });

    const invalidInputValue = () => {
      alert(`값이 알맞은 값인지 다시 한번 확인해 주세요.`);
    };

    const fieldNotFound = () => {
      alert(`분야 칸의 입력을 확인해주세요`);
    };

    switch (error.status) {
      case 400:
        invalidInputValue();
        break;
      case 404:
        fieldNotFound();
        break;
      default:
    }
  }
}

function* loginPageSaga() {
  const { AUTH_LOG_IN_SAGA, AUTH_SIGN_UP_SAGA } = loginPageActions;

  yield takeLatest(AUTH_LOG_IN_SAGA, authLogIn);
  yield takeLatest(AUTH_SIGN_UP_SAGA, authSignUp);
}

export default loginPageSaga;
