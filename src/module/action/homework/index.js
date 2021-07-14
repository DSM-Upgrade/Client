const IS_LOADING = "homework/IS_LOADING";
const isLoading = (payload) => ({
  type: IS_LOADING,
  payload,
});

const GET_USER_LIST = "homework/GET_USER_LIST";
const getUserList = (payload) => ({
  type: GET_USER_LIST,
  payload,
});

const GET_USER_LIST_SAGA = "homework/GET_USER_LIST_SAGA";
const getUserListSaga = (payload) => ({
  type: GET_USER_LIST_SAGA,
  payload,
});

const GET_HOMEWORK_LIST = "homework/GET_HOMEWORK_LIST";
const getHomeworkList = (payload) => ({
  type: GET_HOMEWORK_LIST,
  payload,
});

const GET_HOMEWORK_LIST_SAGA = "homework/GET_HOMEWORK_LIST_SAGA";
const getHomeworkListSaga = (payload) => ({
  type: GET_HOMEWORK_LIST_SAGA,
  payload,
});

const GET_HOMEWORK_CONTENT = "homework/GET_HOMEWORK_CONTENT";
const getHomeworkContent = (payload) => ({
  type: GET_HOMEWORK_CONTENT,
  payload,
});

const GET_HOMEWORK_CONTENT_SAGA = "homework/GET_HOMEWORK_CONTENT_SAGA";
const getHomeworkContentSaga = (payload) => ({
  type: GET_HOMEWORK_CONTENT_SAGA,
  payload,
});

const ASSIGNMENT_HOMEWORK_SAGA = "homework/ASSIGNMENT_HOMEWORK_SAGA";
const assignmentHomeworkSaga = (payload) => ({
  type: ASSIGNMENT_HOMEWORK_SAGA,
  payload,
});

const RETURN_HOMEWORK_SAGA = "homework/RETURN_HOMEWORK_SAGA";
const returnHomeworkSaga = (payload) => ({
  type: RETURN_HOMEWORK_SAGA,
  payload,
});

const COMPLETION_HOMEWORK = "homework/COMPLETION_HOMEWORK";
const completionHomework = (payload) => ({
  type: COMPLETION_HOMEWORK,
  payload,
});

const CHANGE_HOMEWORK = "homework/CHANGE_HOMEWORK";
const changeHomework = (payload) => ({
  type: CHANGE_HOMEWORK,
  payload,
});

const ELIMINATION_HOMEWORK = "homework/ELIMINATION_HOMEWORK";
const eliminationHomework = (payload) => ({
  type: ELIMINATION_HOMEWORK,
  payload,
});

export const homeworkActions = {
  GET_HOMEWORK_LIST,
  GET_HOMEWORK_LIST_SAGA,
  GET_HOMEWORK_CONTENT,
  GET_HOMEWORK_CONTENT_SAGA,
  ASSIGNMENT_HOMEWORK_SAGA,
  RETURN_HOMEWORK_SAGA,
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
  CHANGE_HOMEWORK,
  COMPLETION_HOMEWORK,
  ELIMINATION_HOMEWORK,
  IS_LOADING,
};

export const homeworkActionsCreaters = {
  getHomeworkList,
  getHomeworkContent,
  returnHomeworkSaga,
  completionHomework,
  changeHomework,
  eliminationHomework,
  getHomeworkListSaga,
  getHomeworkContentSaga,
  isLoading,
  assignmentHomeworkSaga,
  getUserList,
  getUserListSaga,
};
