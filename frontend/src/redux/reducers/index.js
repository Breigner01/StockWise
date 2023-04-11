import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

// Overwrite this redux element
export default combineReducers({
    authReducer,
    errorReducer
});