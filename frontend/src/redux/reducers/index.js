import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import inventoryReducer from "./inventoryReducer";

// Overwrite this redux element
export default combineReducers({
    authReducer,
    productReducer,
    inventoryReducer
});