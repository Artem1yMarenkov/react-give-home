import { CHECK_AUTH } from "../actions/auth";
import { setToken } from "../slices/auth";

export const authMiddleware = store => next => action => {
    if (action.type !== CHECK_AUTH) {
        return next(action);
    }

    const token = localStorage.token;
    console.log(token);
    
    if (token) {
        setToken(token);
        return next(setToken("token"));
    }
    next({type: ""});
} 