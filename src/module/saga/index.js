import { all } from "redux-saga/effects";

import fieldSaga from "./field";
import loginUserSaga from "./loginUser";

function* rootSaga() {
  yield all([fieldSaga(), loginUserSaga()]);
}

export default rootSaga;
