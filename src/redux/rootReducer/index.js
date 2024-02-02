import { combineReducers } from "redux";
import { SET_ALL_POST_REDUCER } from "../reducer/setPostReducer";


const appReducer = combineReducers({
 postReducer :  SET_ALL_POST_REDUCER
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;