import PokemonFoundCard from "./PokemonFoundCard";
import { DropDownList } from "./shared/DropDownList";
import { MdOutlineClose } from "react-icons/md";
import Pokemon from "../types/PokemonType";
import { useState } from "react";
import { allPokemonNameData, allPokemonIdData } from "../data/AllPokemonNameData";

const SelectPokemonCard = ({inputText, onChangeInputText, isShowForm, onCloseForm, onAddPokemon}:
    {
        inputText: string;
        onChangeInputText: (newText: string) => void;
        isShowForm: boolean;
        onCloseForm: () => void;
        onAddPokemon: (pokemon: Pokemon) => void;
    }
) => {

    // const [dataError, setDataError] = useState(false);
    const [animation, setAnimation] = useState('animate__animated animate__fadeIn');

    const onInputChange = (newText: string) => {
        onChangeInputText(newText);
    }

    const handleAddPokemon = (pokemonFound: Pokemon) => {
        setAnimation('animate__animated animate__fadeOut');
        setTimeout(() => {
            onAddPokemon(pokemonFound);
            setAnimation('animate__animated animate__fadeIn');
        }, 500);
    }

    return (
        <>
            {
                isShowForm ?
                (

                    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 ${animation}`}>
                        <div className={`bg-indigo-950 rounded-xl p-6 w-[35%] h-[40%] inline-block shadow-2xl`}>

                            <div 
                                className={`justify-self-end cursor-pointer`}
                                onClick={() => {
                                    setAnimation('animate__animated animate__fadeOut');
                                    setTimeout(() => {
                                        onCloseForm();
                                        setAnimation('animate__animated animate__fadeIn');
                                    }, 500);
                                    }
                                }
                            >
                                <MdOutlineClose color="white" size='30'/>
                            </div>

                            <div>
                                <DropDownList
                                dataList = {allPokemonNameData} 
                                isLoading = {false}
                                value={inputText}
                                onChange={onInputChange}
                                extraStyle="bg-indigo-950 border-2 border-gray-400 ml-10 h-40"
                                inputStyle="bg-indigo-950 border-2 border-solid border-gray-800 border-inherit text-gray-200 ml-10"
                                listItemStyle="hover:bg-indigo-900 text-black w-72"
                                />
                                <PokemonFoundCard
                                pokemonName={
                                    allPokemonNameData?.includes(inputText) || allPokemonIdData.includes(inputText) ?
                                    (
                                    inputText 
                                    )
                                    :
                                    ''
                                }
                                extraStyle="p-4 m-4"
                                imgStyle="w-36 h-36"
                                getPokemon={(pokemonFound) => handleAddPokemon(pokemonFound)}
                                />
                            </div>
                            
                            
                        </div>
                    </div>
                )
                :
                null
            }
        
        </>
    )
}

export default SelectPokemonCard