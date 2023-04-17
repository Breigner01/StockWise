import { GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES } from "../actions/types";

const initialState = {
    products: [],
    categories: [],
    product: {}
};

// Note: function has no name so we define ...
// this reducers name in the index file when we import
export default function(state=initialState, action){
    switch (action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                // products: [...state.products, action.payload.data]
            };
        case ADD_PRODUCT:
            return {
                ...state,
                // products: [...state.products, action.payload.data]
            };
        default:
            return state;
    }
}