import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

// Overwrite this redux element
export default combineReducers({
    authReducer,
    productReducer
});