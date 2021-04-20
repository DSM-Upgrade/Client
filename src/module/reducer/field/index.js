import { FIELD_ACTIONS } from "../../action/field";

const initialState = { fields: [] };

const fieldReducer = (state = initialState, action) => {
  const { SET_FIELDS } = FIELD_ACTIONS;

  switch (action.type) {
    case SET_FIELDS: {
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
