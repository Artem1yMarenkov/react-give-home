import { CHECK_AUTH, SET_AUTH_ERROR, SET_TOKEN } from '../../actions/auth';
import { IS_FETCHING } from '../../actions/global';

export const signinAction = ({password, email}) => {
    return async (dispatch) => {
        dispatch({type: IS_FETCHING, isFetching: true});
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
        } catch (error) {
            dispatch({type: IS_FETCHING, isFetching: false});
            dispatch({type: SET_AUTH_ERROR, errorMessage: error});
        }

        const res = await promise.json();

        const status = promise.status;

        switch (status) {
            case 200:
                localStorage.token = res.token;
                dispatch({type: SET_TOKEN, token: res.token});
                break;
            default:
                dispatch({type: SET_AUTH_ERROR, errorMessage: res.message});
                alert("Ошибка входа");
        }

        dispatch({type: IS_FETCHING, isFetching: false});
    }
}