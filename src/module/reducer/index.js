import { combineReducers } from "redux";

import admin from "./admin";
import auth from "./auth";
import dropDown from "./dropDown";
import field from "./field";
import loginUser from "./loginUser";
import modal from "./modal";

const rootReducer = combineReducers({
  admin,
  auth,
  dropDown,
  field,
  loginUser,
  modal,
});

export default rootReducer;
