const SHOW_MODAL = "modal/SHOW_MODAL";
const DROP_MODAL = "modal/DROP_MODAL";
const showModal = (payload) => ({
  type: SHOW_MODAL,
  payload,
});
const dropModal = (payload) => ({
  type: DROP_MODAL,
  payload,
});

const SET_ERROR = "modal/SET_ERROR";
const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const MODAL_ACTIONS = {
  SHOW_MODAL,
  DROP_MODAL,
  SET_ERROR,
};

export const MODAL_ACTION_CREATERS = {
  showModal,
  dropModal,
  setError,
};