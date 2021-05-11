import { loginPageActions } from "../../action/loginPage";

const initialState = {
  authToken: {
    access_token: "",
    refresh_token: "",
    is_admin: false,
  },
};

const loginPageReducer = (state = initialState, action) => {
  const { SET_AUTH_TOKEN, FETCH_AUTH_TOKEN } = loginPageActions;
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return {
        ...state,
        authToken: {
          ...action.payload,
        },
      };
    }
    case FETCH_AUTH_TOKEN: {
      return {
        ...state,
        authToken: {
          ...authToken,
          access_token: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loginPageReducer;
