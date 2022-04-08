const initialState = {
    myAds: [
        { phone: '03005988', name: 'Joseph Francis Tribbiani Jr', date: 32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, adress: 'b' },
    ]
}
export default function myAdsReducer(state = initialState, action) {
    switch(action.type) {
        case "DELETE_AD":
            console.log(state.myAds.filter(myAds => myAds.name))
            return {...state, myAds: state.myAds.filter(myAds => myAds.name !== action.payload) }
        default:
            return state
    }
}