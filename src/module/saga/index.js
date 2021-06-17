import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import fieldSaga from "./field";
import loginUserSaga from "./loginUser";
import homeworkSaga from "./homework";

function* rootSaga() {
  yield all([
    adminSaga(),
    authSaga(),
    fieldSaga(),
    loginUserSaga(),
    homeworkSaga(),
  ]);
}

export default rootSaga;
