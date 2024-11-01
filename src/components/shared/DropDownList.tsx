import { useEffect, useRef, useState } from 'react'
import { InputText } from './InputText';
 

type DropDownListProps = {
    dataList: string[];
    isLoading: boolean;
    value: string;
    onChange: (value: string) => void;
}

export const DropDownList = ({dataList, isLoading, value, onChange}: DropDownListProps) => {

    const [isSearching, setIsSearching] = useState<boolean>(false);


    const divListContainerStyle = `bg-white w-[511px] 
            h-[200px] ml-[100px] mb-[20px] rounded-md
            absolute z-30 grid items-start justify-start
            shadow-2xl overflow-visible 
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
            scrollbar-thin scrollbar-thumb-slate-600 
            scrollbar-track-slate-400 overflow-y-scroll
            pb-28`;

    const divListRef = useRef<HTMLDivElement>(null);
    const inputTextRef = useRef<HTMLInputElement>(null);
    
    //filter data based on input
    const filteredData = dataList?.filter( (item) => { return item.toLowerCase().includes(value.toLowerCase()) }) 


    const handleClickOutsideDiv = (event: MouseEvent) => {
        // Si el clic fue fuera del elemento referenciado
        if (divListRef.current && !divListRef.current.contains(event.target as Node)
            && inputTextRef.current && !inputTextRef.current.contains(event.target as Node)) {
            setIsSearching(false);
        }
      };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideDiv);
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideDiv);
        };

      }, [value]);




  return (
    <>
    <InputText
        value={value}
        onChange={onChange}
        placeHolder='Pokemon...'
        extraStyle='mt-[50px] ml-[100px] mb-[20px] mr-[50px]'
        onClick={() => setIsSearching(true)}
        ref={inputTextRef}
    />

    {
        isSearching ?
        (
            <div
                className={divListContainerStyle}
                ref={divListRef}>
                <p 
                className='text-lg text-black w-[500px] h-full p-2 '
                >Pokemon found: {filteredData.length}</p>
                <hr/>
                {
                    isLoading ? //If it is loading, show charging
                    null
                    : //If data is loaded show it
                    filteredData.map( (value, index) => {
                        return(
                        <div 
                        className="hover:bg-slate-400 cursor-pointer w-[500px] h-full p-2
                            text-lg text-black"
                        onClick={() => {
                            onChange(value)
                            setIsSearching(false);
                            }
                        }
                        key={index}> 
                            {value }
                        </div>
                        )

                    })
                    
                }
            </div>
        )
        :
        null
    }
        
    </>
  )
}
