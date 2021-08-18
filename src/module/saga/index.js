import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import fieldSaga from "./field";
import loginPageSaga from "./loginPage";
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
    loginPageSaga(),
  ]);
}

export default rootSaga;
