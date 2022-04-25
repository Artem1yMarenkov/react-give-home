import { addManyAds } from "../reducers/lastAds";
import { IS_FETCHING } from '../actions/global';
const token = localStorage.getItem('token')

export const fetchLastAds = () => {
    return async (dispatch) => {
        dispatch({type: IS_FETCHING, isFetching: true});
        try {
            await fetch('https://fathomless-gorge-97474.herokuapp.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(json => dispatch(addManyAds(json.posts)))
        } catch {
            dispatch({type: IS_FETCHING, isFetching: false});
        }

        dispatch({type: IS_FETCHING, isFetching: false});

    }
}