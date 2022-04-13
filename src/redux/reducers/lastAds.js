import {
    ADD_MANY_LAST_ADS,
} from '../actions/lastAds'

const initialState = {
    lastAds: [
    ]
}
export default function lastAdsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MANY_LAST_ADS:
            return {...state, lastAds: [...action.payload]}
        default:
            return state
    }
}

export const addManyAds = (payload) => ({type: ADD_MANY_LAST_ADS, payload})