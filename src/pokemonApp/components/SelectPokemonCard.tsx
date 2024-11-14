import PokemonFoundCard from "./PokemonFoundCard";
import { DropDownList } from "./shared/DropDownList";
import { MdOutlineClose } from "react-icons/md";
import Pokemon from "../types/PokemonType";
import getPokemonNameList from "../helpers/getPokemonNameList";
import { useMemo } from "react";

const SelectPokemonCard = ({inputText, onChangeInputText, isShowForm, onCloseForm, onAddPokemon}:
    {
        inputText: string;
        onChangeInputText: (newText: string) => void;
        isShowForm: boolean;
        onCloseForm: () => void;
        onAddPokemon: (pokemon: Pokemon) => void;
    }
) => {

    const {pokemonNameList, indexList, hasError} = useMemo(() => getPokemonNameList(), []);

    const onInputChange = (newText: string) => {
        onChangeInputText(newText);
    }

    const handleAddPokemon = (pokemonFound: Pokemon) => {
        onAddPokemon(pokemonFound);
    }

    return (
        <>
            {
                isShowForm ?
                (

                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                        <div className="bg-indigo-950 rounded-xl p-6 
                    w-[600px] h-[380px] grid justify-items-start shadow-2xl animate__animated animate__fadeIn">

                    <div 
                    className={`justify-self-end cursor-pointer`}
                    onClick={onCloseForm}
                    >
                        <MdOutlineClose color="white" size='30'/>
                    </div>
                    <DropDownList
                        dataList = {pokemonNameList} 
                        isLoading = {hasError}
                        value={inputText}
                        onChange={onInputChange}
                        extraStyle={`w-[300px] h-[200px] ml-[100px] mt-[75px] bg-indigo-950 border-2 border-gray-400`}
                        inputStyle={`bg-indigo-950 border-2 border-solid border-gray-400 border-inherit
                             mb-[10px] ml-[100px] text-gray-200`}
                        listItemStyle="w-[286px] text-gray-300 hover:bg-indigo-900"
                    />
                    <PokemonFoundCard
                    pokemonName={
                        pokemonNameList?.includes(inputText) || indexList.includes(inputText) ?
                        (
                        inputText 
                        )
                        :
                        ''
                    }
                    extraStyle="h-[200px] "
                    imgStyle="w-[200px] h-[200px] ml-3"
                    getPokemon={(pokemonFound) => handleAddPokemon(pokemonFound)}
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

export default SelectPokemonCard