import { SET_AUTH_ERROR, SIGNUP_SUCCESS } from '../../actions/auth';
import { IS_FETCHING } from '../../actions/global';

export const signupAction = ({login, password, email}) => {
    return async (dispatch) => {
        dispatch({type: IS_FETCHING, isFetching: true});
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
            dispatch({type: IS_FETCHING, isFetching: false});
            dispatch({type: SET_AUTH_ERROR});
        }

        const status = promise.status;

        switch (status) {
            case 200:
                dispatch({type: SIGNUP_SUCCESS, success: true});
                break;
            default:
                dispatch({type: SET_AUTH_ERROR, status});
        }

        dispatch({type: IS_FETCHING, isFetching: false});
    }
}