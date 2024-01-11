import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import authSlice from "./authSlice";
import authTempSlice from "./authTempSlice";
import storage from "../storage";

const rootPersistConfig = {
  key: "root",
  version: 1,
  blacklist: ["authTempReducer"],
  storage,
};

const rootReducer = combineReducers({
  authReducer: authSlice,
  authTempReducer: authTempSlice,
});

export default persistReducer(rootPersistConfig, rootReducer);
