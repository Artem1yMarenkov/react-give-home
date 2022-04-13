import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import globalReducer from "./global";
import lastAdsReducer from "./lastAds";
import myAdsReducer from "./myAds";
import addNewReducer from './AddNew'

export default combineReducers({
    auth: authReducer,
    myAds: myAdsReducer,
    lastAds: lastAdsReducer,
    addnew: addNewReducer,
    global: globalReducer
})
