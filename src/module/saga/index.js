import { all } from "redux-saga/effects";
import field from "./field";

function* rootSaga() {
  yield all([field]);
}

export default rootSaga;
