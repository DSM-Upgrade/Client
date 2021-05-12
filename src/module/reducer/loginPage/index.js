import { loginPageActions } from "../../action/loginPage";

const initialState = {
  signUpInfo: {
    username: "",
    password: "",
    name: "",
    field_id: "",
    student_num: "",
  },
  loginInfo: {
    username: "",
    password: "",
  },
  authToken: {
    access_token: "",
    refresh_token: "",
    is_admin: false,
  },
};

const loginPageReducer = (state = initialState, action) => {
  const {
    SET_AUTH_TOKEN,
    FETCH_AUTH_TOKEN,
    AUTH_LOG_IN,
    AUTH_SIGN_UP,
  } = loginPageActions;

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
    case AUTH_LOG_IN: {
      return {
        ...state,
        loginInfo: {
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loginPageReducer;
