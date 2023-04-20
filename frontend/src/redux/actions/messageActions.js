import { CREATE_MESSAGE, DELETE_MESSAGE } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
}

// REMOVE MESSAGES
export const removeMessages = () => {
    return {
        type: DELETE_MESSAGE
    };
}