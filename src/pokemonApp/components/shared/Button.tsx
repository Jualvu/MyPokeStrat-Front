import { MouseEventHandler } from "react";

//children type
type ButtonProps = {
    text: string;
    onClickFunc: MouseEventHandler<HTMLButtonElement>;
    style: string;
  };


export const Button = ({ text, onClickFunc, style }: ButtonProps) => {

  return (
    <button
        className= {style}
        onClick={onClickFunc}
    >
          {text}
    </button>
  )
}
