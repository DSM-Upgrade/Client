import { loginPageActions } from "../../action/loginPage";

const initialState = {};

const loginPageReducer = (state = initialState, action) => {
  const { AUTH_LOGIN, AUTH_SIGN_UP, AUTH_RE_ACCESS_TOKEN } = loginPageActions;

  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loginSuccess: action.payload,
      };
    }
    case AUTH_SIGN_UP: {
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
