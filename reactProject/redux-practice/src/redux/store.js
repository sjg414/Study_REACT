import { createStore } from "redux";
import reducer from "./reducer/reducer";

//state 저장소
let store = createStore(reducer);

export default store;
