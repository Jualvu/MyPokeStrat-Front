type Props = {
    children: JSX.Element;
}

const Card = ({ children }: Props) => {
    return (
        <div
            className='bg-white w-[800px] h=[300] \
            mt-4 mb-4 grid items-center justify-normal rounded-2xl shadow-2xl'>
            {children}
        </div>
    )
}

export default Card