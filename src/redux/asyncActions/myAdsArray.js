import { SET_AUTH_ERROR } from '../actions/auth';
import { IS_FETCHING } from '../actions/global';
import { addManyAds } from "../reducers/myAds";


export const fetchMyAds = () => {
    const token = localStorage.getItem('token');

    return async function(dispatch) {
        dispatch({type: IS_FETCHING, isFetching: true});
        let promise;
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/posts/my', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            dispatch({type: IS_FETCHING, isFetching: false});
            dispatch({type: SET_AUTH_ERROR, errorMessage: error});
        }
        
        const json = await promise.json();
        const message = json?.message;
        
        if (message == "VERIFY_TOKEN_ERROR") {
            dispatch({type: SET_AUTH_ERROR, errorMessage: "VERIFY_TOKEN_ERROR"});
        }

        !message && dispatch(addManyAds(json));
        dispatch({type: IS_FETCHING, isFetching: false});
    }
}