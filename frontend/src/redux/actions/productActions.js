import { gql } from '@apollo/client';
import { PRODUCT_LOADING, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';
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
        `,})
    .then((res) => {
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
export const addProduct = (product) => (dispatch, getState) => {
    client.mutate({
        mutation: gql`
            mutation{
                createProduct(
                    userId: "abc1234",
                    product: ${product}
                )
            }
        `,})
    .then((res) => {
        dispatch({
            type: ADD_PRODUCT,
        });
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });
}

// // DELETE STUDENT API CALL
// export const deleteStudent = (id) => (dispatch, getState) => {

//     const config = apiconfig(getState);

//     axios.delete(`http://localhost/a1/api/student/delete.php?id=${id}`, config)
//         .then(res => {
//             dispatch(createMessage({
//                 deleteStudent: 'Student Deleted'
//             }));
//             dispatch({
//                 type: DELETE_STUDENT,
//                 payload: res.data
//             });
//         }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// }