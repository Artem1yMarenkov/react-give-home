import {deleteAd } from "../../redux/reducers/myAds";
import { fetchMyAds } from "../../redux/asyncActions/myAdsArray";
const token = localStorage.getItem('token')

export const deleteAdFetch = (id) => {
    return async (dispatch) => { 
        let promise
        try {
            promise = await fetch('https://fathomless-gorge-97474.herokuapp.com/post', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                'id': id
            })
        })
        } catch {
            alert('server error')
        }

        const status = promise.status;

        switch (status) {
            case 200:
                dispatch(deleteAd(id))
                dispatch(fetchMyAds())
                break;
            default:
                break;
        }
    }
}