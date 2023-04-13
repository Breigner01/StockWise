import { gql } from '@apollo/client';
import { GET_INVENTORY, UPDATE_INVENTORY } from './types';
import client from "../../Apollo";

// GET INVENTORY API CALL
export const getInventory = (userId, sku) => (dispatch) => {
    client.query({
        query: gql`
            query{
                viewInventory(userId: "${userId}", sku: "${sku}"){
                    ownerId, sku, quantity, available, inTransit
                }
            }
        `,
    }).then((res) => {
        dispatch({
            type: GET_INVENTORY,
            payload: res.data.viewInventory[0]
        });
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });
    
}

// UPDATE INVENTORY API CALL
export const addInventory = (userId, item) => (dispatch) => {
    client.mutate({
        mutation: gql`
            mutation{
                addInventory(
                    userId: $userId,
                    itemRequest: $item
                )
            }
        `,
        variables: {userId, item: item}
    }).then((res) => {
        dispatch({
            type: UPDATE_INVENTORY,
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
}

// UPDATE INVENTORY API CALL
export const decreaseInventory = (userId, item) => (dispatch) => {
    client.mutate({
        mutation: gql`
            mutation{
                decreaseInventory(
                    userId: $userId,
                    itemRequest: $item
                )
            }
        `,
        variables: {userId, item: item}
    }).then((res) => {
        dispatch({
            type: UPDATE_INVENTORY,
        });
    }).catch((err) => {
        if (err){
            console.log({err});
        }
    });
}