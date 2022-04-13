import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import globalReducer from "./global";

export default combineReducers({
    auth: authReducer,
    global: globalReducer
})