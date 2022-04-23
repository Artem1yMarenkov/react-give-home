import { SET_AUTH_ERROR, SET_TOKEN } from "../actions/auth";

const VERIFY_TOKEN_ERROR = "VERIFY_TOKEN_ERROR";

export const authErrorMiddleware = store => next => action => {
    if (action.type !== SET_AUTH_ERROR) {
        return next(action);
    }

    const errorMessage = action.payload;

    switch (errorMessage) {
        case VERIFY_TOKEN_ERROR:
            localStorage.removeItem("token");
            return next({type: SET_TOKEN, token: null});
        default:
            return next(action);
    }
} 