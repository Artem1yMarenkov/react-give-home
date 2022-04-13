import {
    DELETE_AD,
    ADD_MANY_MY_ADS,
} from '../actions/myAds'

const initialState = {
    myAds: [
    ]
}
export default function myAdsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MANY_MY_ADS:
            return {...state, myAds: [...action.payload]}
        case DELETE_AD:
            state.myAds.splice(myAds => myAds.id,1)
            return {...state}
        default:
            return state
    }
}

export const deleteAd = (payload) => ({type: DELETE_AD, payload})
export const addManyAds = (payload) => ({type: ADD_MANY_MY_ADS, payload})