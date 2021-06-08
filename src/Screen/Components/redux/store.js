import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducers from './reducers'
const combinedReducer = combineReducers({
    products:productsReducers
})
export const store = createStore(combinedReducer,composeWithDevTools())

