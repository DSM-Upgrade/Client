const FETCH_AUTH_ACCESS_SAGA = "admin/FETCH_AUTH_ACCESS_SAGA";
const fetchAuthAccessSaga = (payload) => ({
  type: FETCH_AUTH_ACCESS_SAGA,
  payload,
});
const FETCH_AUTH_ACCESS_SAGA_SUCCESS = "admin/FETCH_AUTH_ACCESS_SAGA_SUCCESS";
const fetchAuthAccessSagaSuccess = (payload) => ({
  type: FETCH_AUTH_ACCESS_SAGA_SUCCESS,
  payload,
});

const FETCH_AUTH_LIST_SAGA = "admin/FETCH_AUTH_LIST_SAGA";
const fetchAuthListSaga = (payload) => ({
  type: FETCH_AUTH_LIST_SAGA,
  payload,
});
const FETCH_AUTH_LIST_SAGA_SUCCESS = "admin/FETCH_AUTH_LIST_SAGA_SUCCESS";
const fetchAuthListSagaSuccess = (payload) => ({
  type: FETCH_AUTH_LIST_SAGA_SUCCESS,
  payload,
});

export const adminActions = {
  FETCH_AUTH_ACCESS_SAGA,
  FETCH_AUTH_ACCESS_SAGA_SUCCESS,
  FETCH_AUTH_LIST_SAGA,
  FETCH_AUTH_LIST_SAGA_SUCCESS,
};

export const adminActionCreaters = {
  fetchAuthAccessSaga,
  fetchAuthAccessSagaSuccess,
  fetchAuthListSaga,
  fetchAuthListSagaSuccess,
};
