const SET_SIGN_UP_LIST = "auth/SET_SIGN_UP_LIST";
const setSignUpList = (payload) => ({
  type: SET_SIGN_UP_LIST,
  payload,
});
const GET_SIGN_UP_LIST_SAGA = "auth/GET_SIGN_UP_LIST_SAGA";
const getSignUpListSaga = (payload) => ({
  type: GET_SIGN_UP_LIST_SAGA,
  payload,
});

const CHANGE_PASSWORD_SAGA = "auth/CHANGE_PASSWORD_SAGA";
const changePasswordSaga = (payload) => ({
  type: CHANGE_PASSWORD_SAGA,
  payload,
});
const CHANGE_PASSWORD_SAGA_SUCCESS = "auth/CHANGE_PASSWORD_SAGA_SUCCESS";
const changePasswordSagaSuccess = (payload) => ({
  type: CHANGE_PASSWORD_SAGA_SUCCESS,
  payload,
});

export const authActions = {
  SET_SIGN_UP_LIST,
  GET_SIGN_UP_LIST_SAGA,
  CHANGE_PASSWORD_SAGA,
  CHANGE_PASSWORD_SAGA_SUCCESS,
};

export const authActionCreaters = {
  setSignUpList,
  getSignUpListSaga,
  changePasswordSaga,
  changePasswordSagaSuccess,
};
