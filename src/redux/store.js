import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "./middleware/auth";
import { authErrorMiddleware } from "./middleware/authError";

import authReducer from "./slices/auth";
import adsReducer from "./slices/myAds";
import globalReducer from './reducers/global';
import addNewReducer from './reducers/AddNew';

const store = configureStore({
    reducer: {
        auth: authReducer,
        ads: adsReducer,
        addnew: addNewReducer,
        global: globalReducer
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddlewares = getDefaultMiddleware({
            thunk: true
        });

        return [
            ...defaultMiddlewares,
            authErrorMiddleware,
            authMiddleware
        ]
    }
})

export default store;
