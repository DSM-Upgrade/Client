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

export const FIELD_ACTIONS = {
  SET_FIELDS,
  FETCH_FIELDS_SAGA,
};

export const FIELD_ACTION_CREATERS = {
  setFields,
  fetchFieldsSaga,
};
