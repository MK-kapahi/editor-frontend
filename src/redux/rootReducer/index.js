import { combineReducers } from "redux";
import { SET_ALL_POST_REDUCER } from "../reducer/setPostReducer";
import { SET_COMMENT_REDUCER } from "../reducer/setCommentReducer";


const appReducer = combineReducers({
 postReducer :  SET_ALL_POST_REDUCER,
 commentReducer : SET_COMMENT_REDUCER
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;