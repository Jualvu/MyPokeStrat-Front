import { forwardRef } from "react";

type onFocusFunc = () => void;

type InputTextProps = {
    value: string;
    placeHolder: string;
    extraStyle: string;
    onChange: (value: string) => void;
    onFocus: onFocusFunc;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ value, onChange, placeHolder, extraStyle, onFocus }, ref) => {

    const inputTextStyle = `w-[300px] h-[40px] text-xl p-4 rounded-xl ${extraStyle}`;
  

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    const handleOnFocus = () => {
      onFocus();
    }

    

    return (
      <input
            type='text'
            className={inputTextStyle}
            placeholder={placeHolder}
            value={value}
            onChange={handleChange}
            ref={ref}
            onFocus={handleOnFocus}
      />

    )
  }
);
