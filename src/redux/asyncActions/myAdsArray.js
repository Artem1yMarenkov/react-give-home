import { SET_AUTH_ERROR } from '../actions/auth';
import { IS_FETCHING } from '../actions/global';
import { addManyAds } from "../reducers/myAds";
const token = localStorage.getItem('token')

export const fetchMyAds = () => {
    return async (dispatch) => {
        try {
            await fetch('https://fathomless-gorge-97474.herokuapp.com/posts/my', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(json => dispatch(addManyAds(json)))
        } catch {
            alert('Server Error')
        }
    }
}