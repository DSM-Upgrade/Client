import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import fieldSaga from "./field";
import loginUserSaga from "./loginUser";

function* rootSaga() {
  yield all([adminSaga(), authSaga(), fieldSaga(), loginUserSaga()]);
}

export default rootSaga;
