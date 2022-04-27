import { createSlice } from '@reduxjs/toolkit';
import signin from '../thunk/auth/signin';
import signup from '../thunk/auth/signup';

const ERRORS = {
    SERVER: "SERVER_ERROR",
    DATA: "DATA_ERROR",
    UNKNOWN: "UNKNOWN_ERROR"
}

const initialState = {
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action) {
            const {token} = action;
            state.token = token;
        },
        setAuthError(state, action) {
            switch (action.status) {
                case 400:
                    return state.error = ERRORS.DATA;
                case 500:
                    return state.error = ERRORS.SERVER;
                default:
                    return state.error = ERRORS.UNKNOWN;
            }
        },
        checkAuth(state, action) {
            const {token} = localStorage;
            state.token = token;
        },
        logout(state, action) {
            localStorage.removeItem("token");
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action);
        });
        builder.addCase(signin.fulfilled, (state, action) => {
            const { token } = action.payload;
            if (token) state.token = token;
        })
    }
});

const { actions, reducer } = authSlice;
export const { setToken, setAuthError, checkAuth, logout } = actions;

export default reducer;