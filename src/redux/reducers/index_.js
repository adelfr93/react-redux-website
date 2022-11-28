import { combineReducers } from "redux";
import { productsReducers, selectedProductReducer } from "./productsReducer";

const reducers = combineReducers({
    allProducts: productsReducers,
    product: selectedProductReducer
});

export default reducers;