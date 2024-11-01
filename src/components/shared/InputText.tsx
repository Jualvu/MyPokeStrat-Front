import { forwardRef } from "react";

type onClickFunc = () => void;

type InputTextProps = {
    value: string;
    placeHolder: string;
    extraStyle: string;
    onChange: (value: string) => void;
    onClick: onClickFunc;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ value, onChange, placeHolder, extraStyle, onClick }, ref) => {

    const inputTextStyle = `w-[300px] h-[40px] text-xl p-4 rounded-xl ${extraStyle}`;
  

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    const handleOnClick = () => {
      onClick();
    }

    

    return (
      <input
            type='text'
            className={inputTextStyle}
            placeholder={placeHolder}
            value={value}
            onChange={handleChange}
            onClick={handleOnClick}
            ref={ref}
      />

    )
  }
);
