import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

//리듀서 합치기
export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
