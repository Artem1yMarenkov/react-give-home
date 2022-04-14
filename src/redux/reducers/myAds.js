import {
    DELETE_AD,
    ADD_MANY_MY_ADS,
} from '../actions/myAds'

const initialState = {
    myAds: [
    ]
}

const token = localStorage.getItem('token')

const deleteFetch = (id) => {
    fetch('https://fathomless-gorge-97474.herokuapp.com/post', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            'id': id
        })
    })
    .then(res => console.log(res))
}

export default function myAdsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MANY_MY_ADS:
            return {...state, myAds: [...action.payload]}
        case DELETE_AD:
            deleteFetch(action.payload)
            return {...state}
        default:
            return state
    }
}

export const deleteAd = (payload) => ({type: DELETE_AD, payload})
export const addManyAds = (payload) => ({type: ADD_MANY_MY_ADS, payload})