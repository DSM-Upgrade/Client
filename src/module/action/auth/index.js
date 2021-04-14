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

export const authActions = {
  SET_SIGN_UP_LIST,
  GET_SIGN_UP_LIST_SAGA,
};

export const authActionCreaters = {
  setSignUpList,
  getSignUpListSaga,
};
