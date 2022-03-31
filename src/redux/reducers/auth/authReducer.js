const SET_IS_AUTH = "SET_IS_AUTH";
const SET_TOKEN = "SET_TOKEN";

const initialState = {
    token: null
};

export function authReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return {
                token: action.token
            }
        default: 
            return state;
    }
}

export const tokenAction = (token) => {
    return {
        type: SET_IS_AUTH,
        token: token
    }
}