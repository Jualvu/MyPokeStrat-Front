import { useContext, useEffect, useState } from "react";
import SelectPokemonCard from "../components/SelectPokemonCard";
import { Button } from "../components/shared/Button";
import { PokemonTeamList } from "../components/PokemonTeamList";
import Pokemon from "../types/PokemonType";
import { RemovePokemonCard } from "../components/RemovePokemonCard";
import { PokemonContext } from "../context/PokemonTeamContext/PokemonContext";
import { PokemonInTeam } from "../context/types/pokemonContextTypes";
import { PokemonAIContext } from "../context/AI_PokemonTeam/PokemonAIContext";
import { LoadingCard } from "../components/LoadingCard";
import Header from "../components/Header";



const Home = (): JSX.Element => {
  
  // const pokemonContext = useContext( PokemonContext );
  const { pokemonTeamState, handleNewPokemon, handleRemovePokemon } = useContext( PokemonContext ) || {
    pokemonTeamState: [], 
    handleNewPokemon: () => {}, 
    handleRemovePokemon: () => {}
  };

  const { pokemonAITeamState, createPokemonAITeam } = useContext( PokemonAIContext) || {
    pokemonTeamState: [], 
    createPokemonAITeam: () => {}
  };


  //states
  const [inputText, setInputText] = useState<string>('');
  const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);
  const [showPokemonRemoveForm, setShowPokemonRemoveForm] = useState<boolean>(false);
  const [showChargingScreen, setShowChargingScreen] = useState<boolean>(false);
  const [addButtonStyleEnable, setAddButtonStyleEnable] = useState<boolean>(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInTeam>();

  const onGeneratePokemonTeam = () => {
    //generate only if rivals team is exactly 6
    if( pokemonTeamState && pokemonTeamState?.length === 6){
      setShowChargingScreen(true);
      const pokemonTeamJSONFormat = {
        pokemonTeam: `[${pokemonTeamState?.map( (pokemon: PokemonInTeam) => {return pokemon.pokemon.name}).toString()}]`
      }
      createPokemonAITeam(pokemonTeamJSONFormat);
    }

  }

  useEffect( () => {
    if(pokemonAITeamState){
      setTimeout(() => setShowChargingScreen(false), 500);
    }
  },[pokemonAITeamState])

  //useEffect to change if add button should be enable or not
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
        <Header />
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

        {
          showChargingScreen ?
          <LoadingCard
          isShowForm={showChargingScreen}
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
                Welcome to MyPokeStrat!
            </h1>

            <p className="text-2xl text-white mt-4">
                Here you find the best pokemon team to defeat your rival.
            </p>

          </div>
         
            <div className="w-3/5 grid">

            {
              (pokemonAITeamState?.message !== '') ?
              <div className="bg-blue-950 w-fill h-fill mt-14 justify-self-center  rounded-xl opacity-90 ml-48 mr-48 mb-6 animate__animated animate__fadeIn">
                <p className="p-4 text-gray-300">
                    {pokemonAITeamState?.message}
                </p>
              </div>
              :
              null
            }
              

              <div className="flex justify-between">
                <Button
                text={`Add Pokemon`}
                  onClickFunc={onShowFormEmpty}
                  style={
                    addButtonStyleEnable ?
                    `text-gray-200 bg-roseCustom p-3 rounded-xl m-4 w-1/6
                    hover:scale-110 cursor-pointer`
                    :
                    `text-gray-500 bg-gray-800 p-3 rounded-xl m-4 w-1/6 cursor-auto `
                  }
                />
                <Button
                text={`Generate Pokemon Team`}
                  onClickFunc={onGeneratePokemonTeam}
                  style={
                    addButtonStyleEnable ?
                    `text-gray-500 bg-gray-800 p-3 rounded-xl m-4  w-3/12 cursor-auto `
                    :
                    `text-gray-200 bg-roseCustom p-3 rounded-xl m-4  w-3/12
                    hover:scale-110 cursor-pointer`
                    
                  }
                />
              </div>
              
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
                    pokemonList={
                      pokemonAITeamState?.pokemonTeam ? pokemonAITeamState.pokemonTeam : []
                    }
                    getSelectedPokemonOnClick={() => {}}
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
