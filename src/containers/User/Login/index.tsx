import React, { useState, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container, LogoContainer, LogoImg, LoginContainer } from "./style";
import LikeButton from "./test";

import * as actionCreators from "./store/actionCreators";
import FormContainer from "./LoginForm";
import PhoneForm from "./PhoneForm";
import { connect } from "react-redux";

// css module 用法 vite必须是 文件名.module.[css|less|scss] 命名
// import styles from "./index.module.css"; className={styles.title}

//定义接口 继承路由组件参数
// RouteComponentProps
// history: H.History<S>;
// location: H.Location<S>;
// match: match<Params>;
// staticContext?: C | undefined;
interface IProps extends RouteComponentProps {
  LoginByVcodeDispatch: (phone: number, vcode: string) => any; //登录发送code
  sentVcodeDispatch: (phone: number) => any; //触发发送状态
  changeSentStatusDispatch: () => any; //改变发送状态
  sentStatus: boolean; //发送状态
  loginStatus: boolean; //登录状态
}

const Login: React.FC<IProps> = (props) => {
  const {
    LoginByVcodeDispatch,
    sentVcodeDispatch,
    sentStatus,
    loginStatus,
    changeSentStatusDispatch,
    history, //路由自带的
  } = props;
  const [inPhone, setInPhone] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const checkBoxRef = useRef<HTMLDivElement>(null); //表单引用传递
  const inputEl = useRef(1);
  //登录校验
  const jumpToLogin = (method: string) => {
    if (!agreed) {
      console.log(checkBoxRef);
      checkBoxRef.current!.classList.add("shake-horizontal");
      setTimeout(() => {
        checkBoxRef.current!.classList.remove("shake-horizontal");
      }, 500);
      return;
    }
    console.log(method === "phone");
    if (method === "phone") {
      setInPhone(true);
    }
  };
  //去到首页
  const jumpToIndex = () => {
    history.push("/recommend");
  };
  const test = () => {
    inputEl.current = 2;
  };

  //电话回调
  const onPhoneBack = () => {
    setInPhone(false);
  };
  const fancyInputRef = useRef<HTMLInputElement>();
  return (
    // JSX 表达式必须具有一个父元素 所以使用空标签聚合子元素
    <>
      {/* CSSTransition */}
      <CSSTransition
        in={!inPhone}
        classNames="push-out"
        timeout={1000}
        unmountOnExit={true}
      >
        {/* 容器 */}
        <Container>
          {/* logo */}
          <LogoContainer>
            <div>
              <LogoImg />
            </div>
          </LogoContainer>
          <LikeButton ref={fancyInputRef}></LikeButton>
          <button onClick={() => fancyInputRef.current!.focus()}>测试</button>
          {/* 表单组件 */}
          <FormContainer
            jumpToLogin={jumpToLogin}
            jumpToIndex={jumpToIndex}
            setAgreed={setAgreed}
            ref={checkBoxRef}
          />
        </Container>
      </CSSTransition>
      <CSSTransition in={inPhone} timeout={500} classNames="push-in">
        <LoginContainer>
          <PhoneForm
            loginByVcode={LoginByVcodeDispatch}
            onClickBack={onPhoneBack}
            sentVcode={sentVcodeDispatch}
            sentStatus={sentStatus}
          ></PhoneForm>
        </LoginContainer>
      </CSSTransition>
    </>
  );
};
// 映射Redux全局的state到组件的props上
// Appstate
const mapStateToProps = (state: any) => ({
  userInfo: state.user.userInfo,
  sentStatus: state.user.sentStatus,
  loginStatus: state.user.loginStatus,
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
  return {
    sentVcodeDispatch(phone: number) {
      // dispatch 触发一个方法
      dispatch(actionCreators.sentVcode(phone));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
