import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import usePrevious from "./useprevious";
const HYinput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(1);
  const lastValue = usePrevious(value); //初始化默认值
  console.log(lastValue)

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current!.focus();
      },
    }),
    [inputRef]
  );

  return (
    <>
      <input type="text" ref={inputRef}></input>
      <button onClick={() => setValue(value + 1)}>我是谁</button>
      {value}-{lastValue}
    </>
  );
});
export default HYinput;
