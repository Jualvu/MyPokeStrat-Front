import { MdOutlineClose } from "react-icons/md"
import { Button } from "./shared/Button"
import { useState } from "react";

export const RemovePokemonCard = ({isShowForm, onCloseForm, onRemovePokemon}:
    {
        isShowForm: boolean,
        onCloseForm: () => void,
        onRemovePokemon: () => void
    }
) => {

const [animation, setAnimation] = useState('animate__animated animate__fadeIn');

    
  return (
    <>
        {
            isShowForm ?
            (

                <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70
                                animate__animated animate__fadeIn ${animation}`}>
                    <div className="bg-indigo-950 rounded-xl p-6 
                                w-[400px] h-[200px] grid justify-items-start shadow-2xl ">

                        <div 
                        className="justify-self-end cursor-pointer"
                        onClick={() => {
                            setAnimation('animate__animated animate__fadeOut');
                            setTimeout(() => {
                                onCloseForm();
                                setAnimation('animate__animated animate__fadeIn');
                            }, 500)
                        }}
                        >
                            <MdOutlineClose color="white" size='30'/>

                        </div>

                        <p 
                        className="text-white text-2xl
                                ml-5 mt-3">
                            Remove Pokemon from Team?
                        </p>

                        <Button text={"Remove"} 
                                onClickFunc={() => {
                                    setAnimation('animate__animated animate__fadeOut');
                                    setTimeout(() => {
                                        onRemovePokemon();
                                        setAnimation('animate__animated animate__fadeIn');
                                    }, 500)
                                }}
                                style={`border-2 border-transparent hover:border-white hover:border-2 
                                        opacity-80 bg-rose-800 cursor-pointer rounded-2xl text-lg 
                                        px-6 py-2 text-white mt-5 ml-32 transform transition duration-500`}
                        />
                
                    </div>
                </div>
            )
            :
            null
        }
    
    </>
)
}
