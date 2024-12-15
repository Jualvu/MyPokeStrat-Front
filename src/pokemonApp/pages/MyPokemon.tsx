import { useContext, useEffect, useState } from "react";
import PokemonFoundCard from "../components/PokemonFoundCard";
import { DropDownList } from "../components/shared/DropDownList";
import Header from "../components/Header";
import { allPokemonIdData, allPokemonNameData } from "../data/AllPokemonNameData";
import { PokemonInTeam } from "../context/types/pokemonContextTypes";
import { PokemonSmallCard } from "../components/PokemonSmallCard";
import Pokemon, { PokemonFromDB } from "../types/PokemonType";
import { addPokemon } from "../services/myPokemon/addPokemon";
import { getAllPokemon } from "../services/myPokemon/getAllPokemon";
import { deletePokemonFromDB } from "../services/myPokemon/deletePokemon";
import { RemovePokemonCard } from "../components/RemovePokemonCard";
import { AuthContext } from "../../auth/context/AuthContext";


const MyPokemon = (): JSX.Element => {

  const { authState } = useContext(AuthContext) || {
    logUser: () => {}
  };
  //states
  const [inputText, setInputText] = useState<string>('');
  const [showPokemonRemoveForm, setShowPokemonRemoveForm] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInTeam>();
  const [pokemonList, setPokemonList] = useState<PokemonFromDB[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    assignPokemonDBList();
  }, []);
  
  //Get Pokemon List from DB and assign it
  const assignPokemonDBList = async() => {

    const { pokemonListFromDB, isLoadingPokemonFromDB, hasError } = await getAllPokemon();
    if(hasError) return console.log('Error en BD');
    setPokemonList(pokemonListFromDB);
    setIsLoading(isLoadingPokemonFromDB);
  }

  //delete pokemon from db
  const handleDeletePokemon = async() => {
    try{

      if(selectedPokemon){

        deletePokemonFromDB(selectedPokemon.id);
        console.log(selectedPokemon);
        // setPokemonList([]);


        setTimeout(() => {
        assignPokemonDBList();
        }, 100)
      }
      setShowPokemonRemoveForm(!showPokemonRemoveForm);

    }catch(error){
      console.log(error);
    }
    
  }

  //add pokemon to database
  const handleAddPokemonToDB = async (pokemon: Pokemon) => {

    console.log(authState);
    try {
      const response = await addPokemon(pokemon);
      console.log(response);  
      setTimeout(() => {
        assignPokemonDBList();
      }, 100);
      setInputText('');
     

    }catch(error){
      console.log(error);
    }

  }

  const onShowRemovePokemonForm = ( pokemonInTeam: PokemonInTeam ) => {
    setSelectedPokemon(pokemonInTeam);
    setShowPokemonRemoveForm(!showPokemonRemoveForm);
  }

  const onInputChange = (newText: string) => {
    setInputText(newText);
  }

  return (

    <>

        {
          showPokemonRemoveForm ?
          <RemovePokemonCard
          isShowForm={showPokemonRemoveForm}
          onCloseForm={() => setShowPokemonRemoveForm(!showPokemonRemoveForm)}
          onRemovePokemon={handleDeletePokemon}
          />
          :
          null
        }

       <Header /> 

       <h1 className="text-gray-300 text-4xl justify-self-center mt-10"
       >Select all the pokemon you have caught</h1>

      <div
        className="bg-transparent min-h-svh flex 
                justify-center animate__animated animate__fadeIn"
      >

        <div className="bg-transparent opacity-95 rounded-2xl w-2/6 m-10">
      
          <DropDownList
          dataList = {allPokemonNameData} 
          isLoading = {false}
          value={inputText}
          onChange={onInputChange}
          extraStyle="bg-indigo-950 border-2 border-gray-400 ml-4 h-40"
          inputStyle="bg-indigo-950 border-2 border-solid border-gray-800 border-inherit text-gray-200 ml-4"
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
            getPokemon={(pokemon) => {handleAddPokemonToDB(pokemon)}}
          />


        </div>

        <div className={`bg-indigo-950 w-10/12 m-10 mb-48 rounded-xl `}>

          <div className="justify-items-center grid grid-cols-3 m-4">
            {
                isLoading ?
                null
                :
                pokemonList.map( (pokemon: PokemonFromDB) => {

                    const pokeInTeam: PokemonInTeam = {
                      id: pokemon._id ? pokemon._id : '',
                      pokemon: {
                        id: pokemon.pokemonId ? pokemon.pokemonId : 0,
                        name: pokemon.pokemonName ? pokemon.pokemonName : '',
                        img: pokemon.pokemonImage ? pokemon.pokemonImage : '',
                        types: pokemon.pokemonTypes ? pokemon.pokemonTypes : ['']
                      }
                      
                    }

                    return (
                      <div className="w-full h-full p-2"
                      key={pokeInTeam.id}>
                        <PokemonSmallCard
                        pokemonInTeam={pokeInTeam}
                        onClickGetPokemon={(pokemon) => onShowRemovePokemonForm(pokemon)}
                        isRemovePokemonAnimation={true}/>
                      </div>
                        
                    )
                })
                
            }             
          </div>

        </div>


      </div>
    </>
  );
};

export default MyPokemon;
