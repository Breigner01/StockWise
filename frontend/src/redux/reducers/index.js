import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";

// Overwrite this redux element
export default combineReducers({
    authReducer,
    errorReducer,
    messageReducer
});