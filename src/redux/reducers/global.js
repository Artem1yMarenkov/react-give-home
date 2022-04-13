import { IS_FETCHING } from "../actions/global"

const initialState = {
    isFetching: false
}

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}