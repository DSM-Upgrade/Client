import { fieldActions } from "../../action/field";

const initialState = { fields: [] };

const fieldReducer = (state = initialState, action) => {
  const { SET_FIELDS, FETCH_FIELDS_SAGA_SUCCESS } = fieldActions;

  switch (action.type) {
    case SET_FIELDS:
    case FETCH_FIELDS_SAGA_SUCCESS: {
      return {
        ...state,
        fields: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default fieldReducer;
