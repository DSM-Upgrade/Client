import { all } from "redux-saga/effects";

import authSaga from "./auth";
import fieldSaga from "./field";
import loginUserSaga from "./loginUser";

function* rootSaga() {
  yield all([authSaga(), fieldSaga(), loginUserSaga()]);
}

export default rootSaga;
