import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authMiddleware } from "./middleware/auth";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk, authMiddleware));
