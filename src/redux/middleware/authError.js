import { SET_AUTH_ERROR } from "../actions/auth";
import { logout } from "../slices/auth";

const VERIFY_TOKEN_ERROR = "VERIFY_TOKEN_ERROR";

export const authErrorMiddleware = store => next => action => {
    if (action.type !== SET_AUTH_ERROR) {
        return next(action);
    }

    const errorMessage = action.errorMessage;

    switch (errorMessage) {
        case VERIFY_TOKEN_ERROR:
            return next(logout());
        default:
            return next(action);
    }
} 