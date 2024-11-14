import { useEffect, useRef, useState } from 'react'
import { InputText } from './InputText';
 
type DropDownListProps = {
    dataList: string[];
    isLoading: boolean;
    value: string;
    onChange: (value: string) => void;
    extraStyle: string;
    inputStyle: string;
    listItemStyle: string;
}

export const DropDownList = ({dataList, isLoading, value, onChange, extraStyle, inputStyle, listItemStyle}: DropDownListProps) => {

    const [isSearching, setIsSearching] = useState<boolean>(false);


    const divListContainerStyle = `rounded-md absolute z-30 grid items-start justify-start
            shadow-2xl overflow-visible scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
            scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-400 overflow-y-scroll
            pb-28 ${extraStyle}`;

    const divListRef = useRef<HTMLDivElement>(null);
    const inputTextRef = useRef<HTMLInputElement>(null);
    
    //filter data based on input
    const filteredData = dataList.filter( (item) => { return item.toLowerCase().includes(value.toLowerCase()) }) 



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
        extraStyle={inputStyle}
        onFocus={() => setIsSearching(true)}
        ref={inputTextRef}
    />

    {
        isSearching ?
        (
            <div
                className={divListContainerStyle}
                ref={divListRef}>
                <p 
                className={`text-lg h-full p-2 text-gray-200 cursor-pointer ${listItemStyle}`}
                >Pokemon found: {filteredData.length}</p>
                <hr/>
                {
                    isLoading ? //If it is loading, show charging
                    null
                    : //If data is loaded show it
                    filteredData.map( (value, index) => {
                        return(
                        <div 
                        className={`text-lg h-full w-full p-2 cursor-pointer text-gray-200 ${listItemStyle}`}
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
