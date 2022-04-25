import {
    DELETE_AD,
    ADD_MANY_MY_ADS,
} from '../actions/myAds'

const initialState = {
    myAds: []
}


export default function myAdsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MANY_MY_ADS:
            const {payload} = action;
            console.log(action);
            return {
                ...state,
                myAds: payload ? [...payload] : []
            }
        case DELETE_AD:
            return {...state}
        default:
            return state
    }
}

export const deleteAd = (payload) => ({type: DELETE_AD, payload})
export const addManyAds = (payload) => ({type: ADD_MANY_MY_ADS, payload})