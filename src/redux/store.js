/*******CREATE STORE USING COMBINED REDUCER PACKAGE 
 * Reducer : A component which change data in store
 * **********/
import { createStore } from "redux";
import rootReducer from "./reducer/index";

export default createStore(rootReducer);
