import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import fieldSaga from "./field";
import loginUserSaga from "./loginUser";
import homeworkSaga from "./homework";
import adminHomeworkSaga from "./homework/adminHomework";

function* rootSaga() {
  yield all([
    adminSaga(),
    authSaga(),
    fieldSaga(),
    loginUserSaga(),
    homeworkSaga(),
    adminHomeworkSaga(),
  ]);
}

export default rootSaga;
