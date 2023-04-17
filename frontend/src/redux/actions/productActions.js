import { gql } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';
import client from "../../Apollo";

// GET PRODUCTS API CALL
export const getProducts = (userId) => (dispatch) => {
    client.query({
        query: gql`
            query{
                getProducts(userId: "${userId}"){
                    id, name, brand, description, price, category
                }
            }
        `,
    }).then((res) => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.getProducts
        });
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });
    
}


// POST PRODUCT API CALL

export const addProduct = (userId, product) => (dispatch) => {
    product.price = parseFloat(product.price)
    
    client.mutate({
        variables: {userId: userId, product: product},
        mutation: gql`
        mutation($userId: String!, $product: ProductInput!){
            createProduct(userId: $userId, product: $product)
        }`
        
    }).then((res) => {
        dispatch({
            type: ADD_PRODUCT,
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
}

// UPDATE PRODUCT API CALL
export const updateProduct = (userId, product) => (dispatch) => {
    try{
         client.mutate({
        mutation: gql`
            mutation{
                updateProduct(
                    userId: $userId,
                    product: $product
                )
            }
        `,
        variables: {userId, product: product}
    }).then((res) => {
        dispatch({
            type: UPDATE_PRODUCT,
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
    }catch(e){
        console.log(e)
    }
   
}

// DELETE PRODUCT API CALL
export const deleteProduct = (userId, productId) => (dispatch) => {
    client.mutate({
        mutation: gql`
            mutation{
                deleteProduct(
                    userId: $userId,
                    product: $productId
                )
            }
        `,
        variables: {userId, productId: productId}
    }).then((res) => {
        dispatch({
            type: DELETE_PRODUCT,
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
}
