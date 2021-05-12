const AUTH_LOG_IN = "loginPage/AUTH_LOG_IN";
const authLogIn = (payload) => ({
  type: AUTH_LOG_IN,
  payload,
});

const AUTH_SIGN_UP = "loginPage/AUTH_SIGN_UP";
const authSignUp = (payload) => ({
  type: AUTH_SIGN_UP,
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

export const loginPageActions = {
  SET_AUTH_TOKEN,
  FETCH_AUTH_TOKEN,
  AUTH_LOG_IN,
  AUTH_SIGN_UP,
};

export const loginPageActionsCreaters = {
  setAuthToken,
  fetchAuthToken,
  authLogIn,
  authSignUp,
};
