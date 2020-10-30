import { combineReducers } from "redux";
import elements from "./elements";

// Added to make it clear that  reducers need to be pure.
export default combineReducers({
  elements
});
