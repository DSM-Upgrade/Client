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
  assignmentHomework: {
    title: "",
    content: "",
    deadline: "",
    usernames: [],
  },
  changeHomework: {
    id: 0,
    usernames: "",
    title: "",
    content: "",
    deadline: "",
  },
  returnHomework: {
    id: 0,
    content: "",
    files: [],
  },
  completionHomework: {
    id: 0,
    username: "",
    status: "",
  },
};

const homeworkReducer = (state = initialState, action) => {
  const {
    GET_HOMEWORK_LIST,
    GET_HOMEWORK_CONTENT,
    ASSIGNMENT_HOMEWORK,
    RETURN_HOMEWORK,
    COMPLETION_HOMEWORK,
    CHANGE_HOMEWORK,
    ELIMINATION_HOMEWORK,
  } = homeworkActions;

  switch (action.type) {
    case GET_HOMEWORK_LIST: {
      return {
        ...state,
        homeworkList: [action.payload],
      };
    }
    case GET_HOMEWORK_CONTENT: {
      return {
        ...state,
        homeworkContent: {
          ...action.payloasd,
        },
      };
    }
    case ASSIGNMENT_HOMEWORK: {
      return {
        ...state,
        assignmentHomework: {
          ...action.payload,
        },
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
    case RETURN_HOMEWORK: {
      return {
        ...state,
        returnHomework: {
          ...action.paylaod,
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
