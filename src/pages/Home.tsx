import { useContext, useEffect, useState } from "react";
import SelectPokemonCard from "../components/SelectPokemonCard";
import { Button } from "../components/shared/Button";
import { PokemonTeamList } from "../components/PokemonTeamList";
import Pokemon from "../types/PokemonType";
import { PokemonInTeam } from "../context/pokemonReducer";
import { RemovePokemonCard } from "../components/RemovePokemonCard";
import { PokemonContext } from "../context/PokemonContext";



const Home = (): JSX.Element => {
  
  // const pokemonContext = useContext( PokemonContext );
  const { pokemonTeamState, handleNewPokemon, handleRemovePokemon } = useContext( PokemonContext ) || {
    pokemonTeamState: [], 
    handleNewPokemon: () => {}, 
    handleRemovePokemon: () => {}
  };

  //states
  const [inputText, setInputText] = useState<string>('');
  const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);
  const [showPokemonRemoveForm, setShowPokemonRemoveForm] = useState<boolean>(false);
  const [addButtonStyleEnable, setAddButtonStyleEnable] = useState<boolean>(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInTeam>();


  useEffect(() => {
    if(pokemonTeamState && pokemonTeamState?.length > 5){
      setAddButtonStyleEnable(false);
    }else if( pokemonTeamState && pokemonTeamState?.length < 6){
      setAddButtonStyleEnable(true);
    }
  }, [pokemonTeamState])

  
  const onInputChange = (newText: string) => {
    setInputText(newText);
  }


  const onShowFormEmpty = () => {
    if( pokemonTeamState && pokemonTeamState?.length < 6){
      setInputText('');
      setShowPokemonSelectForm(!showPokemonSelectForm);
    }
  }

  const onRemovePokemon = () => {
    if(selectedPokemon) handleRemovePokemon(selectedPokemon);
    setShowPokemonRemoveForm(!showPokemonRemoveForm);
  }

  const onShowRemovePokemonForm = ( pokemonInTeam: PokemonInTeam ) => {
    setSelectedPokemon(pokemonInTeam);
    setShowPokemonRemoveForm(!showPokemonRemoveForm)
  }

  const onAddPokemon = (pokemon: Pokemon) => {
    // handleNewPokemon creates the pokemonInTeam object to send to the Reducer
    handleNewPokemon(pokemon);
    setShowPokemonSelectForm(!showPokemonSelectForm);
  }

  return (
    <>
        {
          showPokemonSelectForm ?
            <SelectPokemonCard
            inputText={inputText}
            onChangeInputText={onInputChange}
            isShowForm={showPokemonSelectForm}
            onCloseForm={() => setShowPokemonSelectForm(!showPokemonSelectForm)}
            onAddPokemon={onAddPokemon}
            />
          :
          null
        }
        
        {
          showPokemonRemoveForm ?
          <RemovePokemonCard
          isShowForm={showPokemonRemoveForm}
          onCloseForm={() => setShowPokemonRemoveForm(!showPokemonRemoveForm)}
          onRemovePokemon={onRemovePokemon}
          />
          :
          null
        }
     
      
        <div
          className="bg-transparent overflow-visible h-screen w-svw
          pb-28 grid-row justify-items-center mt-10 animate__animated animate__fadeIn"
        >

          <div className="grid justify-items-center mb-20">
            <h1 className="text-5xl text-white mt-4">
                Welcome to PokeApp!
            </h1>

            <p className="text-2xl text-white mt-4">
                Here you find the best pokemon team to defeat your rival.
            </p>

          </div>

            <div className="w-3/5 grid ">
              <Button
              text={`Add Pokemon`}
                onClickFunc={onShowFormEmpty}
                style={
                  addButtonStyleEnable ?
                  `text-gray-200 bg-roseCustom p-3 rounded-xl m-4 w-1/6
                  hover:scale-110`
                  :
                  `text-gray-500 bg-gray-800 p-3 rounded-xl m-4 w-1/6`
                }
              />
              
              <div className="flex justify-between">

                <PokemonTeamList
                  pokemonList={pokemonTeamState ? pokemonTeamState : []}
                  getSelectedPokemonOnClick={onShowRemovePokemonForm}
                  titleText="Rival's team"
                />

                <h1 className="text-white text-6xl text-center justify-self-center self-center w-2/5
                          animate__animated animate__fadeInLeft">
                  VS
                </h1>

                <PokemonTeamList
                  pokemonList={[]}
                  getSelectedPokemonOnClick={onShowRemovePokemonForm}
                  titleText="Best counter to Rival's team"
                />

              </div>
            </div>

            <footer> ad </footer>

        </div>
    </>
  );
};

export default Home;
