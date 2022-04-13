import { addManyAds } from "../reducers/myAds";

const token = localStorage.getItem('token')

export const fetchMyAds = () => {
    return function(dispatch) {
        fetch('https://fathomless-gorge-97474.herokuapp.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(json => dispatch(addManyAds(json.posts)))
    }
}