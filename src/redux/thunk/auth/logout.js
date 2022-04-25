import { SET_TOKEN } from "../../actions/auth";

export default function logout() {
    return function(dispatch) {
        localStorage.removeItem("token");
        dispatch({type: SET_TOKEN, token: null});
    }
}