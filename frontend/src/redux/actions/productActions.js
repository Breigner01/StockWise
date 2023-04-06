import productData from '../../products.json'

export const loadProducts = () => {
    return {
      type: 'LOAD_PRODUCTS',
      payload: productData,
    };
  };