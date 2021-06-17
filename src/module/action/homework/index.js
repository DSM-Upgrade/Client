const GET_HOMEWORK_LIST = "homework/GET_HOMEWORK_LIST";
const getHomeworkList = (payload) => ({
  type: GET_HOMEWORK_LIST,
  payload,
});

const GET_HOMEWORK_CONTENT = "homework/GET_HOMEWORK_CONTENT";
const getHomeworkContent = (payload) => ({
  type: GET_HOMEWORK_CONTENT,
  payload,
});

const ASSIGNMENT_HOMEWORK = "homework/ASSIGNMENT_HOMEWORK";
const assignmentHomework = (payload) => ({
  type: ASSIGNMENT_HOMEWORK,
  payload,
});

const RETURN_HOMEWORK = "homework/RETURN_HOMEWORK";
const returnHomework = (payload) => ({
  type: RETURN_HOMEWORK,
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
  GET_HOMEWORK_CONTENT,
  ASSIGNMENT_HOMEWORK,
  RETURN_HOMEWORK,
  COMPLETION_HOMEWORK,
  CHANGE_HOMEWORK,
  ELIMINATION_HOMEWORK,
};

export const homeworkActionsCreaters = {
  getHomeworkList,
  getHomeworkContent,
  assignmentHomework,
  returnHomework,
  completionHomework,
  changeHomework,
  eliminationHomework,
};
