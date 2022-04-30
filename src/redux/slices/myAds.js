import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myAds: [],
    lastAds: []
}
export const myAdsSlice = createSlice({
    name: 'myAds',
    initialState,
    reducers: {
        addManyLastAds(state, action) {
            let {payload} = action;
            return {
                ...state,
                lastAds: payload ? [...payload] : []
            }
        },
        addManyMyAds(state, action) {
            let {payload} = action;
            return {
                ...state,
                myAds: payload ? [...payload] : []
            }
        },
        deleteAd(state) {
            return {
                ...state
            }
        }
    }
})

export const {addManyMyAds,addManyLastAds, deleteAd} = myAdsSlice.actions
export default myAdsSlice.reducer