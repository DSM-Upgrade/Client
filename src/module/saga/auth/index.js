import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithBodyWithToken,
} from "../../../lib/requestApi";

import { authActions } from "../../action/auth";
import { modalActions } from "../../action/modal";

function* changePassword(action) {
  try {
    const { nowPassword, newPassword } = action.payload;

    const HTTP_METHOD = methodType.PATCH;
    const REQUEST_URL = myPageApi.changePassword();

    const res = yield call(
      requestApiWithBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL,
      { now_password: nowPassword, new_password: newPassword }
    );

    const { DROP_MODAL } = modalActions;
    const { CHANGE_PASSWORD_SAGA_SUCCESS } = authActions;

    yield put({
      type: CHANGE_PASSWORD_SAGA_SUCCESS,
      payload: res.data,
    });

    alert("비밀번호가 변경되었습니다.");

    yield put({
      type: DROP_MODAL,
    });
  } catch (error) {
    const { status, errors } = error.data;

    const inputNameMap = {
      newPassword: "새 비밀번호",
      nowPassword: "현재 비밀번호",
    };

    const invalidInputValue = () => {
      const targetErrors = errors[1] ?? errors[0];
      alert(`${inputNameMap[targetErrors.field]} 칸의 입력 값을 확인해주세요.`);
    };
    const passwordNotMatched = () => {
      alert(`현재 비밀번호 칸의 입력 값의 인증이 실패했습니다.`);
    };

    switch (status) {
      case 400:
        invalidInputValue();
        break;
      case 409:
        passwordNotMatched();
        break;
      default:
        break;
    }
  }
}

function* authSaga() {
  const { CHANGE_PASSWORD_SAGA } = authActions;

  yield takeLatest(CHANGE_PASSWORD_SAGA, changePassword);
}

export default authSaga;
