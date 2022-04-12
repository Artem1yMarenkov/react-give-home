import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { authMiddleware } from "./middleware/auth";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, thunk));
