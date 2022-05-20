import React, { useState } from "react";
import { Container, Header } from "./style";
import StepOne from "./step-one";
import { trimPhone } from "@/utils";

interface IProps {
  loginByVcode: any;
  onClickBack: any;
  sentVcode: any;
  sentStatus: boolean;
}
const PhoneForm: React.FC<IProps> = (props) => {
  const { onClickBack, sentVcode, sentStatus, loginByVcode } = props;
  const [phone, setPhone] = useState("");

  const onChangePhone = (e: { target: { value: any } }) => {
    let newValue = e.target.value;
    let oldValue = phone;
    const result =
      newValue.length > oldValue.length
        ? newValue
            .replace(/[^\d]/gi, "")//i忽略大小写
            .replace(/(\d{3})(\d{0,4})(\d{0,4})/, "$1 $2 $3")
        : phone.trim().slice(0, -1);
    if (result && trimPhone(result).length > 11) {
      return;
    }
    setPhone(result);
  };
  //切换手机号码和验证码表单
  const triggerSentVcode = () => {
    sentVcode(trimPhone(phone));
  };

  return (
    <Container>
      <Header>
        <img
          src={new URL("../../../../assets/img/back.svg", import.meta.url).href}
          alt=""
          onClick={onClickBack}
        />
        手机号登录
      </Header>
      <StepOne
        onChangePhone={onChangePhone}
        onClickNext={triggerSentVcode}
        phone={phone}
      />
    </Container>
  );
};

export default PhoneForm;
