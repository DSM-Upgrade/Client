import { loginPageActions } from "../../action/loginPage";

const initialState = {
  login: {
    form: {
      username: "",
      password: "",
    },
  },
  register: {
    form: {
      username: "",
      password: "",
      name: "",
      fieldId: "",
      studentNum: "",
    },
  },
};

const loginPageReducer = (state = initialState, action) => {
  const { AUTH_LOGIN, AUTH_SIGN_UP } = loginPageActions;
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        login: {
          form: {
            ...action.payload,
          },
        },
      };
    }
    case AUTH_SIGN_UP: {
      return {
        ...state,
        register: {
          form: {
            ...action.payload,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loginPageReducer;
