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

export const loginPageActions = {
  AUTH_LOGIN,
  AUTH_SIGN_UP,
};

export const loginPageActionsCreaters = {
  authLogin,
  authSignUp,
};
