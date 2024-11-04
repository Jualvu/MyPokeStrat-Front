import { MouseEventHandler } from "react";

//children type
type ButtonProps = {
    text: string;
    onClickFunc: MouseEventHandler<HTMLButtonElement>;
    style: string;
  };


export const Button = ({ text, onClickFunc, style }: ButtonProps) => {

  // const style = `border-2 border-transparent hover:border-white hover:border-2 opacity-80 bg-transparent
  //       cursor-pointer rounded-2xl text-lg px-6 py-2 text-white mt-[10px]`;

  return (
    <button
        className= {style}
        onClick={onClickFunc}
    >
          {text}
    </button>
  )
}
