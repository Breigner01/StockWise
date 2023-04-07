const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
        case "ADD_PRODUCT":
          return {
            ...state,
            products: [...state.products, action.payload],
          };
        default:
          return state;
    }
  };
  
  export default productReducer;