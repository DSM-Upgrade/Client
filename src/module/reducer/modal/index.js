import { MODAL_ACTIONS } from "../../action/modal";

const initialState = {
  isShow: false,
  error: {
    state: false,
    text: "",
  },
  modalElement: null,
};

const modalReducer = (state = initialState, action) => {
  const { SHOW_MODAL, DROP_MODAL, SET_ERROR } = MODAL_ACTIONS;
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        isShow: true,
        modalElement: action.payload,
      };
    }
    case DROP_MODAL: {
      return {
        ...state,
        isShow: false,
        modalElement: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: {
          state: action.payload.state,
          text: action.payload.text,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;