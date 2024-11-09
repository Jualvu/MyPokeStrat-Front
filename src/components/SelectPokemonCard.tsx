import PokemonFoundCard from "../components/PokemonFoundCard";
import { DropDownList } from "../components/shared/DropDownList";
import { MdOutlineClose } from "react-icons/md";
import useFetchPokemonNames from "../hooks/useFetchPokemonNames";
import Pokemon from "../types/PokemonType";

const SelectPokemonCard = ({inputText, onChangeInputText, isShowForm, onShowFormFunc, onAddPokemon}:
    {
        inputText: string;
        onChangeInputText: (newText: string) => void;
        isShowForm: boolean;
        onShowFormFunc: () => void;
        onAddPokemon: (pokemon: Pokemon) => void;
    }
) => {

  //states
  // const [pokemonNameSearch, setPokemonNameSearch] = useState<string>('');
    const {pokemonNameList, indexList, isLoadingPokemonNames} = useFetchPokemonNames();
//   const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);

    const onShowForm = () => {
        onShowFormFunc();
    }

    const onInputChange = (newText: string) => {
        onChangeInputText(newText);
    }

    const handleAddPokemon = (pokemonFound: Pokemon) => {
        // console.log(pokemonFound);
        onAddPokemon(pokemonFound);
        // if( pokemonFound.id !== 0){
        //     handleNewPokemon(pokemonFound);
        // }
        // console.log(JSON.stringify(pokemonTeam));

    }

    return (
        <>
            {
                isShowForm ?
                (

                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-indigo-950 rounded-xl p-6 
                    w-[600px] h-[380px] grid justify-items-start shadow-2xl ">

                    <div 
                    className="justify-self-end cursor-pointer"
                    onClick={onShowForm}
                    >
                        <MdOutlineClose color="white" size='30'/>
                    </div>
                    <DropDownList
                        dataList = {pokemonNameList} 
                        isLoading = {isLoadingPokemonNames}
                        value={inputText}
                        onChange={onInputChange}
                        extraStyle="bg-white mt-[75px] h-[200px] ml-[100px] w-[300px]"
                        inputStyle="mb-[10px] ml-[100px]"
                        listItemStyle="text-gray-500 hover:bg-gray-200"
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