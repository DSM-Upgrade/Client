import { homeworkActions } from "../../action/homework";

const initialState = {
  homeworkList: [{}], // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
  homeworkContent: {
    title: "",
    createdAt: "",
    deadline: "",
    returnAt: "", // 반환 안 했으면 null
    content: "",
    returnContent: "", // 반환 안 했으면 null
    files: [],
  },
  changeHomework: {
    id: 0,
    usernames: "",
    title: "",
    content: "",
    deadline: "",
  },
  completionHomework: {
    id: 0,
    username: "",
    status: "",
  },
  isLoadingHomework: {
    isLoading: true,
  },
  adminHomeworkContent: [{}],
  adminHomeworkList: [{}],
  userList: [{}],
};

const homeworkReducer = (state = initialState, action) => {
  const {
    GET_HOMEWORK_LIST,
    GET_HOMEWORK_CONTENT,
    COMPLETION_HOMEWORK,
    CHANGE_HOMEWORK,
    ELIMINATION_HOMEWORK,
    IS_LOADING,
    GET_USER_LIST,
    GET_ADMIN_HOMEWORK_LIST,
    GET_ADMIN_HOMEWORK_CONTENT,
  } = homeworkActions;

  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        isLoadingHomework: {
          isLoading: action.payload,
        },
      };
    }
    case GET_HOMEWORK_LIST: {
      return {
        ...state,
        homeworkList: action.payload,
      };
    }
    case GET_HOMEWORK_CONTENT: {
      return {
        ...state,
        homeworkContent: {
          ...action.payload,
        },
      };
    }
    case GET_ADMIN_HOMEWORK_LIST: {
      return {
        ...state,
        adminHomeworkList: action.payload,
      };
    }
    case GET_ADMIN_HOMEWORK_CONTENT: {
      return {
        ...state,
        adminHomeworkContent: action.payload,
      };
    }
    case CHANGE_HOMEWORK: {
      return {
        ...state,
        changeHomework: {
          ...action.payload,
        },
      };
    }
    case COMPLETION_HOMEWORK: {
      return {
        ...state,
        completionHomework: {
          ...action.payload,
        },
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};

export default homeworkReducer;
