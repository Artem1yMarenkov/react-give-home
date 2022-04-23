import { CHECK_AUTH, SET_TOKEN } from "../actions/auth";

export const authMiddleware = store => next => action => {
    if (action.type !== CHECK_AUTH) {
        return next(action);
    }

    const token = localStorage.token;
    token && next({type: SET_TOKEN, token: token});
    next({type: ""});
} 