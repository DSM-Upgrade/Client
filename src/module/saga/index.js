import { all } from "redux-saga/effects";

import fieldSaga from "./field";

function* rootSaga() {
  yield all([fieldSaga()]);
}

export default rootSaga;
