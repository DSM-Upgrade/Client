import { dropDownActions } from "../../action/dropDown";

const initialState = {
  field: {
    selectDropDownItem: "",
    unSelectDropDownItems: [],
    defaultDropDownItems: [],
  },
};

const dropDownReducer = (state = initialState, action) => {
  const {
    SET_DEFAULT_DROP_DOWN_ITMES,
    FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS,
    CLICK_DROP_DOWN_ITEM,
    INIT_DROP_DOWN_ITEMS,
  } = dropDownActions;

  switch (action.type) {
    case SET_DEFAULT_DROP_DOWN_ITMES: {
      const { dropDownKind, defaultDropDownItems } = action.payload;

      return {
        ...state,
        [dropDownKind]: {
          ...state[dropDownKind],
          defaultDropDownItems: defaultDropDownItems,
        },
      };
    }
    case FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS: {
      const { dropDownKind, defaultDropDownItems } = action.payload;

      const selectDropDownItem = state[dropDownKind]?.selectDropDownItem;

      const unSelectDropDownItems = selectDropDownItem
        ? defaultDropDownItems.filter(
            (item) => item.id !== selectDropDownItem.id
          )
        : [];

      return {
        ...state,
        [dropDownKind]: {
          ...state[dropDownKind],
          defaultDropDownItems: defaultDropDownItems,
          unSelectDropDownItems: unSelectDropDownItems,
        },
      };
    }
    case CLICK_DROP_DOWN_ITEM: {
      const { dropDownKind, dropDownItem } = action.payload;

      return {
        ...state,
        [dropDownKind]: {
          ...state[dropDownKind],
          selectDropDownItem: dropDownItem,
          unSelectDropDownItems: state[
            dropDownKind
          ].defaultDropDownItems.filter((item) => item.id !== dropDownItem.id),
        },
      };
    }
    case INIT_DROP_DOWN_ITEMS: {
      const { dropDownKind, dropDownItem } = action.payload;

      const defaultDropDownItems = state[dropDownKind]?.defaultDropDownItems;
      const unSelectDropDownItems = defaultDropDownItems
        ? defaultDropDownItems.filter((item) => item.id !== dropDownItem.id)
        : [];

      return {
        ...state,
        [dropDownKind]: {
          ...state[dropDownKind],
          selectDropDownItem: dropDownItem,
          unSelectDropDownItems: unSelectDropDownItems,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default dropDownReducer;
