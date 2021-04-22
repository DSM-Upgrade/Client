import { combineReducers } from "redux";

import auth from "./auth";
import field from "./field";
import loginUser from "./loginUser";
import modal from "./modal";

const rootReducer = combineReducers({
  auth,
  field,
  loginUser,
  modal,
});

export default rootReducer;
