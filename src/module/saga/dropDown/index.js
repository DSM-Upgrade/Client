import { call, put, takeLatest } from "redux-saga/effects";

import { myPageApi } from "../../../lib/Api";
import {
  methodType,
  requestApiWithoutBodyWithoutToken,
} from "../../../lib/requestApi";

import { dropDownActions } from "../../action/dropDown";

function* fetchDefaultDropDownItems(action) {
  try {
    const { dropDownKind } = action.payload;

    const { FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS } = dropDownActions;

    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = myPageApi.field();

    const res = yield call(
      requestApiWithoutBodyWithoutToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    yield put({
      type: FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS,
      payload: { dropDownKind: dropDownKind, defaultDropDownItems: res.data },
    });
  } catch (error) {
    console.error(error);
  }
}

function* dropDownSaga() {
  const { FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA } = dropDownActions;

  yield takeLatest(
    FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA,
    fetchDefaultDropDownItems
  );
}

export default dropDownSaga;
