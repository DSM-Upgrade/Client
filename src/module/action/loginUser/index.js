const SET_STD_INFO = "loginUser/SET_STD_INFO";
const setStdInfo = (payload) => ({
  type: SET_STD_INFO,
  payload,
});
const FETCH_STD_INFO_SAGA = "loginUser/FETCH_STD_INFO_SAGA";
const fetchStdInfoSaga = (payload) => ({
  type: FETCH_STD_INFO_SAGA,
  payload,
});

const MODIFY_STD_INFO_SAGA = "loginUser/MODIFY_STD_INFO_SAGA";
const modifyStdInfoSaga = (payload) => ({
  type: MODIFY_STD_INFO_SAGA,
  payload,
});

const MODIFY_PASSWORD_SAGA = "loginUser/MODIFY_PASSWORD_SAGA";
const modifyPasswordSaga = (payload) => ({
  type: MODIFY_PASSWORD_SAGA,
  payload,
});

const SET_PROFILE = "loginUser/SET_PROFILE";
const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});
const MODIFY_PROFILE_SAGA = "loginUser/MODIFY_PROFILE_SAGAMODIFY_PASSWORD_SAGA";
const modifyProfileSaga = (payload) => ({
  type: MODIFY_PROFILE_SAGA,
  payload,
});

export const loginUserActions = {
  SET_STD_INFO,
  FETCH_STD_INFO_SAGA,
  MODIFY_STD_INFO_SAGA,
  MODIFY_PASSWORD_SAGA,
  SET_PROFILE,
  MODIFY_PROFILE_SAGA,
};

export const loginUserActionCreaters = {
  setStdInfo,
  fetchStdInfoSaga,
  modifyStdInfoSaga,
  modifyPasswordSaga,
  setProfile,
  modifyProfileSaga,
};
