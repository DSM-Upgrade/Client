import { combineReducers } from "redux";

import field from "./field";
import modal from "./modal";
import loginUser from "./loginUser";

const rootReducer = combineReducers({
  field,
  loginUser,
  modal,
});

export default rootReducer;
