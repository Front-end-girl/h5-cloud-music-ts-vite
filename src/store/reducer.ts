import { combineReducers } from "redux";

import userReducer from "../containers/User/Login/store/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
