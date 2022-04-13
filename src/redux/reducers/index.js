import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import lastAdsReducer from "./lastAds";
import myAdsReducer from "./myAds";

export default combineReducers({
    auth: authReducer,
    myAds: myAdsReducer,
    lastAds: lastAdsReducer
})