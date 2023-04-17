import { gql } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES } from './types';
import client from "../../Apollo";

// GET CATEGORIES API CALL
export const getCategories = (userId) => (dispatch) => {
    client.query({
        query: gql`
            query{
                getCategories(userId: "${userId}"){
                    id, name
                }
            }
        `
    }).then((res) => {
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.getCategories
        });
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });
    
}

// GET PRODUCTS API CALL
export const getProducts = (userId) => (dispatch) => {
    client.query({
        query: gql`
            query{
                getProducts(userId: "${userId}"){
                    id, name, brand, description, price, category
                }
            }
        `
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
    
    client.mutate({
        variables: {userId: userId, product: product},
        mutation: gql`
        mutation($userId: String!, $product: ProductInput!){
            createProduct(userId: $userId, product: $product)
        }`,
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
    client.mutate({
        variables: {userId: userId, product: product},
        mutation: gql`
        mutation($userId: String!, $product: ProductInput!){
            updateProduct(userId: $userId, product: $product)
        }`,
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
   
}

// DELETE PRODUCT API CALL
export const deleteProduct = (userId, productId) => (dispatch) => {
    client.mutate({
        variables: {userId: userId, productId: productId},
        mutation: gql`
            mutation($userId: String!, $productId: Int!){
                deleteProduct(
                    userId: $userId,
                    productId: $productId
                )
            }
        `,
        variables: {userId, productId: productId}
    }).then((res) => {
        dispatch({
            type: DELETE_PRODUCT,
            payload: productId
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
}
