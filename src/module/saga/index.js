import { all } from "redux-saga/effects";

import adminSaga from "./admin";
import authSaga from "./auth";
import dropDownSaga from "./dropDown";
import fieldSaga from "./field";
import loginUserSaga from "./loginUser";

function* rootSaga() {
  yield all([
    adminSaga(),
    authSaga(),
    dropDownSaga(),
    fieldSaga(),
    loginUserSaga(),
  ]);
}

export default rootSaga;
