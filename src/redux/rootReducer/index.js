import { combineReducers } from "redux";
import { POST_REDUCER } from "../reducer/postReducer";


const appReducer = combineReducers({
 postReducer :  POST_REDUCER
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;