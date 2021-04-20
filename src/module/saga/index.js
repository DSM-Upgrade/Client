import { all } from "redux-saga/effects";

import fieldSaga from "./field";
import myPageSaga from "./myPage";

function* rootSaga() {
  yield all([fieldSaga(), myPageSaga()]);
}

export default rootSaga;
