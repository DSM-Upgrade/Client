import { adminActions } from "../../action/admin";

const initialState = {
  authList: [],
};

const adminReducer = (state = initialState, action) => {
  const { type } = action;

  const { FETCH_AUTH_LIST_SAGA_SUCCESS } = adminActions;

  switch (type) {
    case FETCH_AUTH_LIST_SAGA_SUCCESS: {
      return {
        ...state,
        authList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default adminReducer;
