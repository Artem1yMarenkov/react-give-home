import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
})