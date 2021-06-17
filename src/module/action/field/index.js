const SET_FIELDS = "field/SET_FIELDS";
const setFields = (payload) => ({
  type: SET_FIELDS,
  payload,
});
const FETCH_FIELDS_SAGA = "field/FETCH_FIELDS_SAGA";
const fetchFieldsSaga = (payload) => ({
  type: FETCH_FIELDS_SAGA,
  payload,
});
const FETCH_FIELDS_SAGA_SUCCESS = "field/FETCH_FIELDS_SAGA_SUCCESS";
const fetchFieldsSagaSuccess = (payload) => ({
  type: FETCH_FIELDS_SAGA_SUCCESS,
  payload,
});

export const fieldActions = {
  SET_FIELDS,
  FETCH_FIELDS_SAGA,
  FETCH_FIELDS_SAGA_SUCCESS,
};

export const fieldActionCreaters = {
  setFields,
  fetchFieldsSaga,
  fetchFieldsSagaSuccess,
};
