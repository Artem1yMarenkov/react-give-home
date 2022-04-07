import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { authMiddleware } from "./middleware/auth";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
