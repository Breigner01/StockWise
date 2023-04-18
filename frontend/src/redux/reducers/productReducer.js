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
                products: [...action.payload].sort((a, b) => a.id - b.id)
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
            const productsArr = [...state.products]
            const newProduct = action.payload;
            const oldProductIndex = productsArr.findIndex(x => x.id == newProduct.id);
            productsArr[oldProductIndex] = newProduct;
            return {
                ...state,
                products: [...productsArr].sort((a, b) => a.id - b.id)
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload].sort((a, b) => a.id - b.id)
            };
        default:
            return state;
    }
}