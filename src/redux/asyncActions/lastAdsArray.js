import { addManyAds } from "../reducers/lastAds";
import { IS_FETCHING } from '../actions/global';
import { SET_AUTH_ERROR } from "../actions/auth";


export const fetchLastAds = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        
        dispatch({type: IS_FETCHING, isFetching: true});
        let promise
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            dispatch({type: IS_FETCHING, isFetching: false});
        }

        const res = await promise.json();
        let rev = res.posts.reverse()
        const status = promise.status;

        switch (status) {
            case 200:
                dispatch(addManyAds(rev))
                break;
            default:
                const message = res?.message;
                dispatch({type: SET_AUTH_ERROR, errorMessage: message});
        }

        dispatch({type: IS_FETCHING, isFetching: false});
    }
}