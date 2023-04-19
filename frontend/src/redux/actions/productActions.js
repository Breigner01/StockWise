import { gql } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES, GET_PRODUCT } from './types';
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
            dispatch(returnErrors(err));
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
            dispatch(returnErrors(err));
        }
    });
    
}

// GET PRODUCTS API CALL
export const getProduct = (userId, sku) => (dispatch) => {
    client.query({
        query: gql`
            query{
                getProductById(userId: "${userId}", productId: ${sku}){
                    id, name, brand, description, price, category
                }
            }
        `
    }).then((res) => {
        dispatch({
            type: GET_PRODUCT,
            payload: res.data.getProductById
        });
    }).catch((err) => {
        if (err){
            dispatch(returnErrors(err));
        }
    });
    
}


// POST PRODUCT API CALL
export const addProduct = (userId, product) => (dispatch) => {
    
    client.mutate({
        variables: {userId: userId, product: product},
        mutation: gql`
        mutation($userId: String!, $product: ProductInput!){
            createProduct(userId: $userId, product: $product){
                id, name, brand, price, description, category
            }
        }`,
    }).then((res) => {
        dispatch(createMessage({
            productCreated: 'Product Created'
        }));
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data.createProduct
        });
    }).catch((err) => {
        if (err){
            dispatch(returnErrors(err));
        }
    });
}

// UPDATE PRODUCT API CALL
export const updateProduct = (userId, product) => (dispatch) => {
    client.mutate({
        variables: {userId: userId, product: product},
        mutation: gql`
        mutation($userId: String!, $product: ProductInput!){
            updateProduct(userId: $userId, product: $product){
                id, name, brand, price, description, category
            }
        }`,
        variables: {userId, product: product}
    }).then((res) => {
        dispatch(createMessage({
            productUpdated: 'Product Updated'
        }));
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data.updateProduct
        });
    }).catch((err) => {
        if (err){
            dispatch(returnErrors(err));
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
        dispatch(createMessage({
            productDeleted: 'Product Deleted'
        }));
        dispatch({
            type: DELETE_PRODUCT,
            payload: productId
        });
    }).catch((err) => {
        if (err){
            dispatch(returnErrors(err));
        }
    });
}
