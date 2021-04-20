import { myPageActions } from "../../action/myPage";

const initialState = {
  stdInfo: {
    name: "",
    student_num: "",
    username: "",
    field: "",
  },
};

const myPageReducer = (state = initialState, action) => {
  const { SET_STD_INFO, GET_STD_INFO_SAGA_SUCCESS } = myPageActions;

  switch (action.type) {
    case SET_STD_INFO:
    case GET_STD_INFO_SAGA_SUCCESS: {
      return {
        ...state,
        stdInfo: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default myPageReducer;
