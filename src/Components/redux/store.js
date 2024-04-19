import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers if needed
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
