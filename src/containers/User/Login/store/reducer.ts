import * as actionTypes from "./constants";
import produce from "immer";

//第一个参数为你准备要改的对象，第二个参数是个回调，这个回调函数的参数就是他给你复制的一个临时对象，所以你可以对这个做任何操作。
//最后produce返回新的对象（下一状态），而currentState任然保持不变。
const defaultState = {
  userInfo: {},
  sentStatus: false,
  loginStatus: false,
};

export default (state = defaultState, action: { type: any; data: any }) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_USER_INFO:
        draft.userInfo = action.data;
        break;
      case actionTypes.CHANGE_SENT_STATUS:
        draft.sentStatus = action.data;
        break;
      case actionTypes.CHANGE_LOGIN_STATUS:
        draft.loginStatus = action.data;
        break;
    }
  });
};
