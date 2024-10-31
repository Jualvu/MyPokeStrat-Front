import { MouseEventHandler } from "react";

//children type
type ButtonProps = {
    text: string;
    onClickFunc: MouseEventHandler<HTMLButtonElement>;
    extraStyle: string;
  };


export const Button = ({ text, onClickFunc, extraStyle }: ButtonProps) => {

  const style = `hover:bg-rose-800 bg-rose-500 
        cursor-pointer rounded-3xl text-xl 
        px-8 py-3 text-white `;

  return (
    <button
        className= {`${style} ${extraStyle}`}
        onClick={onClickFunc}
    >
          {text}
    </button>
  )
}
