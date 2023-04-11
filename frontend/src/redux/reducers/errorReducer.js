import { GET_ERRORS, DELETE_ERRORS } from "../actions/types";

const initialState = {
    err: null
};

export default function(state=initialState, action){
    switch (action.type){
        case GET_ERRORS:
            return {
                err: action.payload
            };
        case DELETE_ERRORS:
            return initialState;
        default:
            return state;
    }

}