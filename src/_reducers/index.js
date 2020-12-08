import { combineReducers } from "redux";
import page from "./page_reducers";

const rootReducer = combineReducers({
  page,
});

export default rootReducer;
