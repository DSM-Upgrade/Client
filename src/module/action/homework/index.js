const SET_HOMEWORK_LIST = "homwork/SET_HOMEWORK_LIST";
const setHomeworkList = (payload) => ({
  type: SET_HOMEWORK_LIST,
  payload,
});

const GET_HOMEWORK_LIST_SAGA = "homework/GET_HOMEWORK_LIST_SAGA";
const getHomeworkListSaga = (payload) => ({
  type: GET_HOMEWORK_LIST_SAGA,
  payload,
});

const CHANGE_HOMEWORK_LIST_SAGA = "homework/CHANGE_HOMEWORK_LIST_SAGA";
const changeHomeworkListSaga = (payload) => ({
  type: CHANGE_HOMEWORK_LIST_SAGA,
  payload,
});

export const HOMEWORK_ACTIONS = {
  SET_HOMEWORK_LIST,
  GET_HOMEWORK_LIST_SAGA,
  CHANGE_HOMEWORK_LIST_SAGA,
};

export const HOMEWORK_ACTION_CREATER = {
  setHomeworkList,
  getHomeworkListSaga,
  changeHomeworkListSaga,
};
