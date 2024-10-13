// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productSlice";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//자동으로 combineReducers, applyMiddleware, thunk, composeWithDevTools 다 해줌
const store = configureStore({
  reducer: { auth: authenticateReducer, product: productReducer },
});

export default store;
