import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../../../lib/requestApi";

import { loginUserActions } from "../../action/loginUser";

function* fetchStdInfo() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = myPageApi.stdInfo();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { FETCH_STD_INFO_SAGA_SUCCESS } = loginUserActions;

    yield put({
      type: FETCH_STD_INFO_SAGA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* modfyStdInfo(action) {
  try {
    const { student_num, field_id } = action.payload;

    const HTTP_METHOD = methodType.PATCH;
    const REQUEST_URL = myPageApi.chagneStdInfo();
    const REQUEST_BODY = { student_num, field_id };

    const res = yield call(
      requestApiWithBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );

    alert("정보 변경에 성공했습니다.");
  } catch (error) {
    const { code, status } = error.data;

    const code2InputFieldMap = {
      C002: "학번",
      F002: "분야",
    };

    const invalidInputValue = () => {
      const targetInputName = code2InputFieldMap[code];
      alert(`${targetInputName} 칸의 입력을 확인해주세요.`);
    };

    switch (status) {
      case 400:
        invalidInputValue();
        break;
      default:
    }

    console.log(error);
  }
}

function* loginUserSaga() {
  const { FETCH_STD_INFO_SAGA, MODIFY_STD_INFO_SAGA } = loginUserActions;

  yield takeLatest(FETCH_STD_INFO_SAGA, fetchStdInfo);
  yield takeLatest(MODIFY_STD_INFO_SAGA, modfyStdInfo);
}

export default loginUserSaga;
