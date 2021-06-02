const FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA =
  "dropDown/FETCH_DEFAULT_DRIOP_DOWN_ITEMS_SAGA";
const fetchDefaultDropDownItemsSaga = (payload) => ({
  type: FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA,
  payload,
});
const FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS =
  "dropDown/FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS";
const fetchDefaultDropDownItemsSagaSuccess = (payload) => ({
  type: FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS,
  payload,
});

const SET_DEFAULT_DROP_DOWN_ITMES = "dropDown/SET_DEFAULT_DROP_DOWN_ITMES";
const setDefaultDropDownItems = (payload) => ({
  type: SET_DEFAULT_DROP_DOWN_ITMES,
  payload,
});

const CLICK_DROP_DOWN_ITEM = "dropDown/CLICK_DROP_DOWN_ITEM";
const clickDropDownItem = (payload) => ({
  type: CLICK_DROP_DOWN_ITEM,
  payload,
});

const INIT_DROP_DOWN_ITEMS = "dropDown/INIT_DROP_DOWN_ITEMS";
const initDropDownItem = (payload) => ({
  type: INIT_DROP_DOWN_ITEMS,
  payload,
});

export const dropDownActions = {
  FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA,
  FETCH_DEFAULT_DROP_DOWN_ITEMS_SAGA_SUCCESS,
  SET_DEFAULT_DROP_DOWN_ITMES,
  CLICK_DROP_DOWN_ITEM,
  INIT_DROP_DOWN_ITEMS,
};
export const dropDownActionCreaters = {
  fetchDefaultDropDownItemsSaga,
  fetchDefaultDropDownItemsSagaSuccess,
  setDefaultDropDownItems,
  clickDropDownItem,
  initDropDownItem,
};
