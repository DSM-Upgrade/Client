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
  const { SET_STD_INFO } = myPageActions;

  switch (action.type) {
    case SET_STD_INFO: {
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
