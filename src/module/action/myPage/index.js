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

export const myPageActions = {
  SET_STD_INFO,
  GET_STD_INFO_SAGA,
};

export const myPageActionCreaters = {
  setStdInfo,
  getStdInfoSaga,
};
