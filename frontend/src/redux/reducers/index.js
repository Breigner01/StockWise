import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";
import productReducer from "./productReducer";
import inventoryReducer from "./inventoryReducer";

// Overwrite this redux element
export default combineReducers({
    authReducer,
    errorReducer,
    messageReducer
    productReducer,
    inventoryReducer
});