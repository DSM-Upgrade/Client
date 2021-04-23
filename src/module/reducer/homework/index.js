import { HOMEWORK_ACTIONS } from "../../action/homework";

const initialState = {
  homeworkList: {
    id: "",
    Title: "",
    Start: "",
    End: "",
    Content: "",
    Status: "",
  },
};

const homeworkReducer = (state = initialState, action) => {
  const {
    SET_HOMEWORK_LIST,
    GET_HOMEWORK_LIST_SAGA,
    CHANGE_HOMEWORK_LIST_SAGA,
  } = HOMEWORK_ACTIONS;

  switch (action.type) {
    case SET_HOMEWORK_LIST: {
      return {
        ...state,
        homeworkList: action.payload,
      };
    }
    /*     case GET_HOMEWORK_LIST_SAGA: {
      return {
        ...state,
        homeworkList: action.payload,
      };
    }*/
    case CHANGE_HOMEWORK_LIST_SAGA: {
      return {
        ...state,
        homeworkList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default homeworkReducer;
