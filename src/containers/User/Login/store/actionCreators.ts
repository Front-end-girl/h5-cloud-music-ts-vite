import { sentVcodeRequest } from "@/utils/api"; //请求方法;
import test from "@/utils/api";
console.log("test", test);
import { CHANGE_SENT_STATUS } from "./constants"; //常量

export const saveSentStatus = (data: any) => ({
  type: CHANGE_SENT_STATUS,
  data,
});
//返回一个方法
export const sentVcode = (phone: number) => {
  return (dispatch: any) => {
    sentVcodeRequest(phone)
      .then((res: any) => {
        if (res.code === 200) {
          dispatch(saveSentStatus(true));
        }
      })
      .catch(() => {
        console.log("请求失败！");
      });
  };
};
