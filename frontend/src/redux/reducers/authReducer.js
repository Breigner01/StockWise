import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
    token: null,
    isAuthenticated: null,
    isLoading: false,
    user: null
};

// Note: function has no name so we define ...
// this reducers name in the index file when we import
export default function(state=initialState, action){
    switch (action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            };
        case REGISTER_SUCCESS:
        default:
            return state;
    }
}