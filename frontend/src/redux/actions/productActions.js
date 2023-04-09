import { useQuery, gql } from '@apollo/client';
import { PRODUCT_LOADING, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';
import client from "../../Apollo";

// GET STUDENTS API CALL
export const getProducts = () => (dispatch) => {
    client.query({
        query: gql`
            query GetProducts {
                locations {
                id
                name
                description
                photo
                }
            }
        `,})
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });
        // dispatch({
        //     type: GET_PRODUCTS,
        //     payload: res.data
        // });
    
}

// // POST STUDENT API CALL
// export const addStudent = (student) => (dispatch, getState) => {

//     const config = apiconfig(getState);

//     axios.post('http://localhost/a1/api/student/post.php', student, config)
//         .then(res => {
//             dispatch(createMessage({
//                 addStudent: 'Student Added'
//             }));
//             dispatch({
//                 type: ADD_STUDENT,
//                 payload: res.data
//             });
//         }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// }

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