import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/types";

const initialState = {
    products: [],
};

// Note: function has no name so we define ...
// this reducers name in the index file when we import
export default function(state=initialState, action){
    switch (action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                // products: state.products.filter(product => product.id !== action.payload.data)
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