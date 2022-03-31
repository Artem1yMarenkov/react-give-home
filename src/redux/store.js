import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer);
