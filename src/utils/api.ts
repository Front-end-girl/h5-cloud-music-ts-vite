import { axiosInstance } from "./request";
export const sentVcodeRequest = (phone: number) => {
  return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};
let test = 1;
export default test;

