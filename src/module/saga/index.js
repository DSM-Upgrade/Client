import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import fieldSaga from "./field";
import loginPageSaga from "./loginPage";
import loginUserSaga from "./loginUser";

function* rootSaga() {
  yield all([
    adminSaga(),
    authSaga(),
    fieldSaga(),
    loginUserSaga(),
    loginPageSaga(),
  ]);
}

export default rootSaga;
