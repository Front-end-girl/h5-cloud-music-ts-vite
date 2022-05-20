import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// 使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性
import { rootReducer } from "./reducer"; //分模块加载store
const composeEnhancers = compose;

export const composeStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) //实现redux异步加载
);

export type AppState = ReturnType<typeof rootReducer>; //关注点
