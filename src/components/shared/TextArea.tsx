
type TextAreaProps = {
    placeHolder: string;
    extraStyle: string;
}

export const TextArea = ({placeHolder, extraStyle}: TextAreaProps) => {

    const style = `w-[600px] h-[150px] text-lg p-4 rounded-xl ${extraStyle}`

  return (
    <textarea
          className={style}
          placeholder={placeHolder}
    />
  )
}


