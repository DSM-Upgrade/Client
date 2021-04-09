const SET_STD_INFO = "myPage/SET_STD_INFO";
const setStdInfo = (payload) => ({
  type: SET_STD_INFO,
  payload,
});
const GET_STD_INFO_SAGA = "myPage/GET_STD_INFO_SAGA";
const getStdInfoSaga = (payload) => ({
  type: GET_STD_INFO_SAGA,
  payload,
});

const CHANGE_STD_INFO_SAGA = "myPage/CHANGE_STD_INFO_SAGA";
const changeStdInfoSaga = (payload) => ({
  type: CHANGE_STD_INFO_SAGA,
  payload,
});

const CHANGE_STD_PASSWORD_SAGA = "myPAge/CHANGE_STD_PASSWORD_SAGA";
const changeStdPasswordSaga = (payload) => ({
  type: CHANGE_STD_PASSWORD_SAGA,
  payload,
});

export const myPageActions = {
  SET_STD_INFO,
  GET_STD_INFO_SAGA,
  CHANGE_STD_INFO_SAGA,
  CHANGE_STD_PASSWORD_SAGA,
};

export const myPageActionCreaters = {
  setStdInfo,
  getStdInfoSaga,
  changeStdInfoSaga,
  changeStdPasswordSaga,
};
