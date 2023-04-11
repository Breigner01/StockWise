import { GET_ERRORS, DELETE_ERRORS } from "./types";

// RETURN ERROR MESSAGES
export const returnErrors = (err) => {
    return {
        type: GET_ERRORS,
        payload: err
    }
}

// REMOVE ERRORS
export const removeErrors = () => {
    return {
        type: DELETE_ERRORS
    };
}