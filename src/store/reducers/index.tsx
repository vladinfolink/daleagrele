import { combineReducers } from "redux";
import { routesReducer } from "./routesReducer";


export const combinedReducers = combineReducers({
  routes: routesReducer
});



