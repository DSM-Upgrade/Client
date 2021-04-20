import { loginUserActions } from "../../action/loginUser";

const initialState = {
  name: "",
  student_num: "",
  username: "",
  field: "",
  profile: "",
};

const loginUserReducer = (state = initialState, action) => {
  const { SET_STD_INFO, SET_PROFILE } = loginUserActions;

  switch (action.type) {
    case SET_STD_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginUserReducer;
