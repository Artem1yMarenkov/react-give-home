import {
    SET_IS_AUTH, 
    SINGIN,
    SINGUP
} from '../actions/auth';

const initialState = {
    token: null,
    isAuth: false,
    
    isFetching: false,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SINGIN:
            return {
                ...state,
                token: action.payload.token
            }
        case SINGUP:
            return {
                ...state,
                token: action.payload.token
            }
        case SET_IS_AUTH: 
            return {
                ...state,
                isAuth: action.payload.isAuth
            }
        default:
            return {
                ...state
            }
    }
}