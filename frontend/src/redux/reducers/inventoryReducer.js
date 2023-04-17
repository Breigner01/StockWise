import { GET_INVENTORY, UPDATE_INVENTORY } from "../actions/types";

const initialState = {
    inventory: {},
};

// Note: function has no name so we define ...
// this reducers name in the index file when we import
export default function(state=initialState, action){
    switch (action.type){
        case GET_INVENTORY:
            return {
                ...state,
                inventory: action.payload
            };
        case UPDATE_INVENTORY:
            return {
                ...state,
            };
        default:
            return state;
    }
}