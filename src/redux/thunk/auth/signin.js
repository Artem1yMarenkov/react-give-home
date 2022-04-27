import { createAsyncThunk } from '@reduxjs/toolkit';

const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

const signin = createAsyncThunk(
    'auth/signin',
    async ({password, email}) => {
        let promise;
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/auth/signin', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    password, email
                })
            });
        } catch {
            return { type: ERROR };
        }

        const status = promise.status;

        switch (status) {
            case 200:
                const {token} = await promise.json();
                localStorage.token = token;
                return { type: SUCCESS, token};
            default:
                return { type: ERROR, status };
        }
    }
);

export default signin;