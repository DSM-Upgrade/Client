import { loginPageActions } from "../../action/loginPage";

const initialState = {
  signUpInfo: {
    username: "",
    password: "",
    name: "",
    fieldId: 0,
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
  inputStatus: {
    loginSetNull: false,
    registerSetNull: false,
  },
};

const loginPageReducer = (state = initialState, action) => {
  const {
    SET_AUTH_TOKEN,
    FETCH_AUTH_TOKEN,
    AUTH_LOG_IN,
    AUTH_SIGN_UP,
    SET_LOGIN_INPUT_NULL,
    SET_REGISTER_INPUT_NULL,
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
    case AUTH_SIGN_UP: {
      return {
        ...state,
        signUpInfo: {
          ...action.payload,
        },
      };
    }
    case SET_LOGIN_INPUT_NULL: {
      return {
        ...state,
        inputStatus: {
          ...state,
          loginSetNull: action.payload,
        },
      };
    }
    case SET_REGISTER_INPUT_NULL: {
      return {
        ...state,
        inputStatus: {
          ...state,
          registerSetNull: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loginPageReducer;
