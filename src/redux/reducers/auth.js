import {
    SET_AUTH_ERROR,
    SET_TOKEN
} from '../actions/auth';

const ERRORS = {
    SERVER: "SERVER_ERROR",
    DATA: "DATA_ERROR",
    UNKNOWN: "UNKNOWN_ERROR"
}

const initialState = {
    token: null,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_AUTH_ERROR: 
            switch (action.status) {
                case 400:
                    return {
                        ...state,
                        error: ERRORS.DATA
                    }
                case 500:
                    return {
                        ...state,
                        error: ERRORS.SERVER
                    }
                default:
                    return {
                        ...state,
                        error: ERRORS.UNKNOWN
                    }
            }
        default:
            return {
                ...state
            }
    }
}