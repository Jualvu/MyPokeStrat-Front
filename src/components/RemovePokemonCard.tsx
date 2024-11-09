import { MdOutlineClose } from "react-icons/md"
import { Button } from "./shared/Button"

export const RemovePokemonCard = ({isShowForm, onCloseForm, onRemovePokemon}:
    {
        isShowForm: boolean,
        onCloseForm: () => void,
        onRemovePokemon: () => void
    }
) => {
    
  return (
    <>
        {
            isShowForm ?
            (

                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-indigo-950 rounded-xl p-6 
                                w-[400px] h-[200px] grid justify-items-start shadow-2xl ">

                        <div 
                        className="justify-self-end cursor-pointer"
                        onClick={onCloseForm}
                        >
                            <MdOutlineClose color="white" size='30'/>

                        </div>

                        <p 
                        className="text-white text-2xl
                                ml-[20px] mt-[10px]">
                            Remove Pokemon from Team?
                        </p>

                        <Button text={"Remove"} 
                                onClickFunc={onRemovePokemon} 
                                style={`border-2 border-transparent hover:border-white hover:border-2 
                                        opacity-80 bg-rose-800 cursor-pointer rounded-2xl text-lg 
                                        px-6 py-2 text-white mt-[20px] ml-[120px]`}
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
