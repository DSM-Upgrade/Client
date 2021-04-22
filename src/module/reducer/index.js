import { combineReducers } from "redux";

import field from "./field";
import loginUser from "./loginUser";
import modal from "./modal";

const rootReducer = combineReducers({
  field,
  loginUser,
  modal,
});

export default rootReducer;
