import { call, put, takeLatest } from "redux-saga/effects";

import { authApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithBodyWithoutToken,
  requestApiWithoutBodyWithoutToken,
  requestApiWithBodyWithToken,
} from "../../../lib/requestApi";

import { loginPageActions } from "../../action/loginPage/index";

function* setAuthToken() {
  try {
    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = authApi.login();
    const REQUEST_BODY = {};

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
  } catch (error) {
    console.log(error);
  }
}

function* loginPageSaga(){
  const{
    
  }
}
