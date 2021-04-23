import { authActions } from "../../action/auth";

const initialState = {
  signUpList: [
    {
      username: "",
      password: "",
      name: "",
      field_id: "",
      student_num: "",
    },
  ],
  passwordInfo: {
    nowPassword: "",
    newPassword: "",
    reEnterPassword: "",
  },
};

const authReducer = (state = initialState, action) => {
  const { CHANGE_PASSWORD_SAGA_SUCCESS } = authActions;

  switch (action.type) {
    case CHANGE_PASSWORD_SAGA_SUCCESS: {
      return {
        ...state,
        passwordInfo: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
