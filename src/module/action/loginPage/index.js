const AUTH_LOG_IN = "loginPage/AUTH_LOG_IN";
const authLogIn = (payload) => ({
  type: AUTH_LOG_IN,
  payload,
});

const AUTH_LOG_IN_SAGA = "loginPage/AUTH_LOG_IN_SAGA";
const authLogInSaga = (payload) => ({
  type: AUTH_LOG_IN_SAGA,
  payload,
});

const AUTH_SIGN_UP = "loginPage/AUTH_SIGN_UP";
const authSignUp = (payload) => ({
  type: AUTH_SIGN_UP,
  payload,
});

const AUTH_SIGN_UP_SAGA = "loginPage/AUTH_SIGN_UP_SAGA";
const authSignUpSaga = (payload) => ({
  type: AUTH_SIGN_UP_SAGA,
  payload,
});

const SET_AUTH_TOKEN = "loginPage/SET_AUTH_TOKEN";
const setAuthToken = (payload) => ({
  type: SET_AUTH_TOKEN,
  payload,
});

const FETCH_AUTH_TOKEN = "loginPage/FETCH_AUTH_TOKEN";
const fetchAuthToken = (payload) => ({
  type: FETCH_AUTH_TOKEN,
  payload,
});

const FETCH_AUTH_TOKEN_SAGA = "loginPage/FETCH_AUTH_TOKEN_SAGA";
const fetchAuthTokenSaga = (payload) => ({
  type: FETCH_AUTH_TOKEN_SAGA,
  payload,
});

const SET_INPUT_NULL = "loginPage/SET_INPUT_NULL";
const setInputNull = (payload) => ({
  type: SET_INPUT_NULL,
  payload,
});

export const loginPageActions = {
  SET_AUTH_TOKEN,
  FETCH_AUTH_TOKEN,
  FETCH_AUTH_TOKEN_SAGA,
  AUTH_LOG_IN,
  AUTH_LOG_IN_SAGA,
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_SAGA,
  SET_INPUT_NULL,
};

export const loginPageActionsCreaters = {
  setAuthToken,
  fetchAuthToken,
  fetchAuthTokenSaga,
  authLogIn,
  authLogInSaga,
  authSignUp,
  authSignUpSaga,
  setInputNull,
};
