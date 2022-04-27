import { createAsyncThunk } from '@reduxjs/toolkit';

const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

const signup = createAsyncThunk(
    "auth/signup",
    async ({login, password, email}) => {
        let promise;
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/auth/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    login, password, email
                })
            });
        } catch {
            return { type: ERROR };
        }

        const status = promise.status;

        switch (status) {
            case 200:
                return { type: SUCCESS };
            default:
                return { type: ERROR, status };
        }
    }
)

export default signup;