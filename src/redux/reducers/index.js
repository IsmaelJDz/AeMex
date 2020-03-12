import { combineReducers } from "redux";
import search from "./searchData";

// ===================
// All reducers
// ===================
const rootReducer = combineReducers({
  search,
});

export default rootReducer;