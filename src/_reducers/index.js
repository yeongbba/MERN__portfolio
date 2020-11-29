import { combineReducers } from "redux";
import page from "./page_reducer";

const rootReducer = combineReducers({
  page,
});

export default rootReducer;
