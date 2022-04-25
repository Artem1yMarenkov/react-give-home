import { addManyAds } from "../reducers/lastAds";
import { IS_FETCHING } from '../actions/global';
const token = localStorage.getItem('token')

export const fetchLastAds = () => {
    return async (dispatch) => {
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
        } catch {
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
                break;
        }

        dispatch({type: IS_FETCHING, isFetching: false});
    }
}