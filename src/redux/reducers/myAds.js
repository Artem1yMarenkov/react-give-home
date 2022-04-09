const initialState = {
    myAds: [
        { phone: '03005988', name: 'Joseph Francis Tribbiani Jr', date: 32, id:32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, id:16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, id:2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, id:3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, id:67, adress: 'b' },
    ]
}
export default function myAdsReducer(state = initialState, action) {
    switch(action.type) {
        case "DELETE_AD":
            state.myAds.splice(myAds => myAds.id,1)
            return {...state}
        default:
            return state
    }
}