import { combineReducers } from "redux";

import admin from "./admin";
import auth from "./auth";
import field from "./field";
import loginUser from "./loginUser";
import modal from "./modal";
import homework from "./homework";

const rootReducer = combineReducers({
  admin,
  auth,
  field,
  loginUser,
  modal,
  homework,
});

export default rootReducer;
