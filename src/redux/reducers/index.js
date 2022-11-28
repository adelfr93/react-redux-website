import { combineReducers } from "redux";
import { productsReducers } from "./productsReducer";

const reducers = combineReducers({
    allProducts: productsReducers
});

export default reducers;