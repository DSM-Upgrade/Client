const AUTH_LOGIN = "loginPage/AUTH_LOGIN";
const authLogin = (payload) => ({
  type: AUTH_LOGIN,
  payload,
});
const AUTH_SIGN_UP = "loginPage/AUTH_SIGNUP";
const authSignUp = (payload) => ({
  type: AUTH_SIGN_UP,
  payload,
});
const AUTH_RE_ACCESS_TOKEN = "loginPage/AUTH_RE_ACCESS_TOKEN";
const authReAccessToken = (payload) => ({
  type: AUTH_RE_ACCESS_TOKEN,
  payload,
});

export const loginPageActions = {
  AUTH_LOGIN,
  AUTH_SIGN_UP,
  AUTH_RE_ACCESS_TOKEN,
};

export const loginPageActionsCreaters = {
  authLogin,
  authSignUp,
  authReAccessToken,
};
