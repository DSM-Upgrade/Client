const SET_AUTH_TOKEN = "loginPage/SET_AUTH_TOKEN";
const setAuthToken = (payload) => ({
  type: SET_AUTH_TOKEN,
  payload,
});

const FETCH_AUTH_TOKEN = "loginPage/FETCH_AUTH_TOKEN";
const fetchAuthToken = (payload) => ({
  type: POST_REFRESH_TOKEN,
  payload,
});

export const loginPageActions = {
  SET_AUTH_TOKEN,
  FETCH_AUTH_TOKEN,
};

export const loginPageActionsCreaters = {
  setAuthToken,
  fetchAuthToken,
};
