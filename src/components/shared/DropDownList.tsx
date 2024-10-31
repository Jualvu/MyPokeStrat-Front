import { useEffect, useRef, useState } from 'react'
import { InputText } from './InputText';

type returnInputFunc = (value: string) => void;
 

type DropDownListProps = {
    dataList: string[];
    isLoading: boolean;
    returnInputText: returnInputFunc;
}

export const DropDownList = ({dataList, isLoading, returnInputText}: DropDownListProps) => {

    const [inputText, setInputText] = useState<string>('');
    const [isSearching, setIsSearching] = useState<boolean>(false);


    const divListContainerStyle = `bg-white w-[511px] 
            h-[200px] ml-[100px] mb-[20px] rounded-md
            absolute z-30 grid items-start justify-start
            shadow-2xl overflow-visible 
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
            scrollbar-thin scrollbar-thumb-slate-600 
            scrollbar-track-slate-400 overflow-y-scroll
            pb-28`;

    console.log(isSearching)

    const divListRef = useRef<HTMLDivElement>(null);
    const inputTextRef = useRef<HTMLInputElement>(null);
    

    const handleClickOutsideDiv = (event: MouseEvent) => {
        // Si el clic fue fuera del elemento referenciado
        if (divListRef.current && !divListRef.current.contains(event.target as Node)
            && inputTextRef.current && !inputTextRef.current.contains(event.target as Node)) {
            console.log('Se hizo clic fuera del elemento referenciado');
            setIsSearching(false);

        }
      };
    
    useEffect(() => {
        // Agregar un event listener para detectar clics en el documento
        document.addEventListener('mousedown', handleClickOutsideDiv);
        console.log('AAA: ' + inputText);
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
          document.removeEventListener('mousedown', handleClickOutsideDiv);
        };
      }, [inputText]);


    const onInputChange = (newText: string) => {
        setInputText(newText);
        returnInputText(inputText);
    }

  return (
    <>
    <InputText
        value={inputText}
        onChange={onInputChange}
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
                {
                    isLoading ? //If it is loading, show charging
                    <div 
                    className="hover:bg-slate-400 cursor-pointer w-[500px] h-full p-2
                        text-lg text-black"> 
                        Charging...
                    </div>
                    : //If data is loaded show it
                    dataList.map( (value, index) => {
                        return(
                        <div 
                        className="hover:bg-slate-400 cursor-pointer w-[500px] h-full p-2
                            text-lg text-black"
                        onClick={() => {
                            setInputText(value)
                            setIsSearching(false);
                            console.log(value)
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
