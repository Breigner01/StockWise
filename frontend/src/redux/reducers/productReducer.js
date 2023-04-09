import { PRODUCT_LOADING, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/types";

const initialState = {
    products: [],
};

// Note: function has no name so we define ...
// this reducers name in the index file when we import
export default function(state=initialState, action){
    switch (action.type){
        // case USER_LOADING:
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        // case USER_LOADED:
        //     return {
        //         ...state,
        //         isAuthenticated: true,
        //         isLoading: false,
        //         user: action.payload.user
        //     };
        // case LOGIN_SUCCESS:
        //     localStorage.setItem("token", action.payload.token);
        //     return {
        //         ...state,
        //         token: action.payload.token,
        //         user: action.payload.user,
        //         isAuthenticated: true,
        //         isLoading: false
        //     };
        // case AUTH_ERROR:
        // case LOGIN_FAIL:
        // case LOGOUT_SUCCESS:
        // case REGISTER_FAIL:
        //     localStorage.removeItem("token");
        //     return {
        //         ...state,
        //         token: null,
        //         isAuthenticated: false,
        //         isLoading: false,
        //         user: null
        //     };
        // case REGISTER_SUCCESS:
        default:
            return state;
    }
}