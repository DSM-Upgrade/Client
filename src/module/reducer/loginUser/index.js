import { loginUserActions } from "../../action/loginUser";

const initialState = {
  userInfo: {
    name: "",
    student_num: "",
    username: "",
    field: { id: null, name: "" },
    profile: null,
  },
};

const loginUserReducer = (state = initialState, action) => {
  const {
    SET_STD_INFO,
    SET_PROFILE,
    FETCH_STD_INFO_SAGA_SUCCESS,
  } = loginUserActions;

  switch (action.type) {
    case SET_STD_INFO:
    case FETCH_STD_INFO_SAGA_SUCCESS: {
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          profile: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loginUserReducer;
