import { addManyAds } from "../reducers/myAds";

const token = localStorage.getItem('token')

export const fetchMyAds = () => {
    return async (dispatch) => {
        let promise
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/posts/my', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            }
        })
        } catch {
            alert('Server Error')
        }

        const res = await promise.json();

        const status = promise.status;

        switch (status) {
            case 200:
                dispatch(addManyAds(res))
                break;
            default:
                break;
        }
    }
}