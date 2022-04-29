import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "./middleware/auth";
import { authErrorMiddleware } from "./middleware/authError";

import authReducer from "./slices/auth";
import lastAdsReducer from "./reducers/lastAds";
import myAdsReducer from "./reducers/myAds";
import globalReducer from './reducers/global';
import addNewSlice from './slices/AddNew'


const store = configureStore({
    reducer: {
        auth: authReducer,
        myAds: myAdsReducer,
        lastAds: lastAdsReducer,
        addNew: addNewSlice,
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
