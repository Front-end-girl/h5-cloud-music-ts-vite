import React, { forwardRef } from "react";
import { FormContainer, Button, AgreeRadio, OtherLoginLink } from "./style";

interface IProps {
  jumpToLogin: (method: string) => void; //立即登录
  setAgreed: (checked: boolean) => void; //同意隐私协议
  jumpToIndex: () => void;
}
// forwardRef 引用传递 是一种组件向子组件传递ref 获取焦点、文本控制、媒体控制等获取dom
const LoginForm = forwardRef(
  (props: IProps, ref?: React.Ref<HTMLDivElement>) => {
    const { jumpToLogin, setAgreed, jumpToIndex } = props;
    const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      setAgreed(e.target.checked);
    };
    //在方法内定义方法
    const loginViaThirdApi = () => {
      alert("第三方登录待开发....");
    };
    return (
      <FormContainer>
        <Button
          background="white"
          color="#DB3730"
          onClick={(e) => {
            e.preventDefault();
            jumpToLogin("phone");
          }}
        >
          手机号登录
        </Button>
        <Button background="#DB3730" color="white">
          立即体验
        </Button>
        {/* 同意协议 */}
        <AgreeRadio ref={ref}>
          {/* 在input上绑定 */}
          <input type="radio" id="tiaokuan" hidden onChange={onChangeChecked} />
          <label htmlFor="tiaokuan"></label>
          <span>
            <span>
              同意<a>{"<<服务条款>>"}</a>和<a>{"<<隐私政策>>"}</a>
            </span>
          </span>
        </AgreeRadio>
        {/* 其他登录方式 */}
        <OtherLoginLink>
          <img
            onClick={loginViaThirdApi}
            src={
              new URL(
                "../../../../assets/img/netease-logo-white.svg",
                import.meta.url
              ).href
            }
            alt=""
          />
          <img
            onClick={loginViaThirdApi}
            src={
              new URL(
                "../../../../assets/img/netease-logo-white.svg",
                import.meta.url
              ).href
            }
            alt=""
          />
          <img
            onClick={loginViaThirdApi}
            src={
              new URL(
                "../../../../assets/img/netease-logo-white.svg",
                import.meta.url
              ).href
            }
            alt=""
          />
        </OtherLoginLink>
      </FormContainer>
    );
  }
);
export default LoginForm;
