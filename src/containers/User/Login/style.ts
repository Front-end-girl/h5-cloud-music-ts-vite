import styled from "styled-components";

// 容器
export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #e82101;
  flex-direction: column;
  align-items: center;
  &.push-out-enter {
    opacity: 0.5;
    transform: translate3d(-100%, 0, 0);
  }

  &.push-out-enter-active,
  &.push-out-enter-done {
    opacity: 1;
    transition: all 500ms;
    transform: translate3d(0, 0, 0);
  }

  &.push-out-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.push-out-exit-active,
  &.push-out-exit-done {
    transform: translate3d(-100%, 0, 0);
    transition: all 500ms;
  }
`;
// logo容器
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  > div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f13b30;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      border: 2px solid #f54060;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      animation: ripple 3s infinite;
      animation-direction: normal;
      animation-timing-function: linear;
    }
    &:after {
      animation-delay: 0s;
    }
    &:before {
      animation-delay: 1s;
    }
    @keyframes ripple {
      0% {
        width: 100px;
        height: 100px;
        border: 2px solid #f54060;
      }
      100% {
        border: 2px solid #f54060;
        width: 300px;
        height: 300px;
        opacity: 0.1;
      }
    }
  }
`;

// logo img
export const LogoImg = styled.img.attrs({
  src: new URL("../../../assets/img/netease-logo-white.svg", import.meta.url)
    .href,
})`
  width: 70px;
`;

export const LoginContainer = styled.div`
  background: #fff;
  opacity: 0;
  display: flex;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  &.push-in-enter {
    transform: translate3d(100%, 0, 0);
  }
  &.push-in-enter-active,
  &.push-in-enter-done {
    opacity: 1;
    transition: all 500ms;
    transform: translate3d(0, 0, 0);
  }
`;
