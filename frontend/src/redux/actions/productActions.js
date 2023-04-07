import productData from '../../products.json'

export const loadProducts = () => {
    return {
      type: 'LOAD_PRODUCTS',
      payload: productData,
    };
  };

  export const addProduct = (newProduct) => {
    return {
      type: "ADD_PRODUCT",
      payload: newProduct,
    };
  };