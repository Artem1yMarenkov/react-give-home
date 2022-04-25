import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authMiddleware } from "./middleware/auth";
import { authErrorMiddleware } from "./middleware/authError";
import rootReducer from "./reducers";

export const store = createStore(
    rootReducer, 
    applyMiddleware(
        authErrorMiddleware,
        authMiddleware,
        thunk,
    )
);
