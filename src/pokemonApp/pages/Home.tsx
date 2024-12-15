import { useContext, useEffect, useState } from "react";
import SelectPokemonCard from "../components/SelectPokemonCard";
import { PokemonTeamList } from "../components/PokemonTeamList";
import Pokemon from "../types/PokemonType";
import { RemovePokemonCard } from "../components/RemovePokemonCard";
import { PokemonContext } from "../context/PokemonTeamContext/PokemonContext";
import { PokemonInTeam } from "../context/types/pokemonContextTypes";
import { PokemonAIContext } from "../context/AI_PokemonTeam/PokemonAIContext";
import { LoadingCard } from "../components/LoadingCard";
import Header from "../components/Header";
import { PokemonAITeamList } from "../components/PokemonAITeamList";
import { Button } from "../components/shared/Button";


const Home = (): JSX.Element => {
  

  //CONTEXTS
  const { pokemonTeamState, handleNewPokemon, handleRemovePokemon } = useContext( PokemonContext ) || {
    pokemonTeamState: [], 
    handleNewPokemon: () => {}, 
    handleRemovePokemon: () => {}
  };

  const { pokemonAITeamState, createPokemonAITeam, createPokemonAITeamFromMyPokemon } = useContext( PokemonAIContext) || {
    pokemonTeamState: [], 
    createPokemonAITeam: () => {},
    createPokemonAITeamFromMyPokemon: () => {}

  };

  //states
  const [inputText, setInputText] = useState<string>('');
  const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);
  const [showPokemonRemoveForm, setShowPokemonRemoveForm] = useState<boolean>(false);
  const [showChargingScreen, setShowChargingScreen] = useState<boolean>(false);
  const [addButtonStyleEnable, setAddButtonStyleEnable] = useState<boolean>(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInTeam>();
  const [loadingModalAnimation, setLoadingModalAnimation] = useState('animate__animated animate__fadeIn')



  const onGeneratePokemonTeam = () => {
    // generate only if rivals team is exactly 6
    if( pokemonTeamState && pokemonTeamState?.length === 6){
      setShowChargingScreen(true);
      const pokemonTeamJSONFormat = {
        pokemonTeam: `[${pokemonTeamState?.map( (pokemon: PokemonInTeam) => {return pokemon.pokemon.name}).toString()}]`
      }
      createPokemonAITeam(pokemonTeamJSONFormat);
    }

  }

  const onGeneratePokemonTeamFromMyPokemon = () => {
    // generate only if rivals team is exactly 6
    if( pokemonTeamState && pokemonTeamState?.length === 6){
      setShowChargingScreen(true);
      const pokemonTeamJSONFormat = {
        pokemonTeam: `[${pokemonTeamState?.map( (pokemon: PokemonInTeam) => {return pokemon.pokemon.name}).toString()}]`
      }
      createPokemonAITeamFromMyPokemon(pokemonTeamJSONFormat);
    }

  }

  useEffect( () => {
    if(pokemonAITeamState){
      // setTimeout(() => setShowChargingScreen(false), 500);
      setTimeout(() =>{
        setLoadingModalAnimation('animate__animated animate__fadeOut')
        setShowChargingScreen(false)
        setLoadingModalAnimation('animate__animated animate__fadeIn')
      }, 1500);
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
          animation={loadingModalAnimation}
          />
          :
          null
        }
    
      
        <div
          className="bg-transparent overflow-visible h-svw w-svw
           grid justify-items-center mt-10 animate__animated animate__fadeIn "
        >

            <h1 className="text-5xl text-white mt-4">
                Welcome to MyPokeStrat!
            </h1>
            <p className="text-2xl text-white mt-4 mb-20">
                Here you find the best pokemon team to defeat your rival.
            </p>


            <footer> ad </footer>

        </div>

        <div className="flex justify-between pl-52 pr-52 ml-16 pb-48">
 
          <div className="flex w-4/5">
              <div className="inline-block">

                <div>
                  <Button
                  text={`Add Pokemon`}
                    onClickFunc={onShowFormEmpty}
                    style={
                      addButtonStyleEnable ?
                      `text-gray-200 bg-roseCustom p-3 pl-4 pr-4 rounded-xl m-4 w-fit h-fit text-xl
                      hover:scale-110 cursor-pointer transform transition duration-500`
                      :
                      `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 w-fit h-fit cursor-auto text-xl`
                    }
                  />
                </div>
                

                <PokemonTeamList
                pokemonList={pokemonTeamState ? pokemonTeamState : []}
                getSelectedPokemonOnClick={onShowRemovePokemonForm}
                titleText="Rival's team"
                pokemonLeftCount={true}
                isRemovePokemonAnimation={true}
                />
              </div>
            

            <h1 className="text-white text-6xl text-center justify-self-center self-center p-10
                      animate__animated animate__fadeInLeft">
              VS
            </h1>

          </div>
                  
              <div className="inline-block">
                <div className="flex justify-between">

                    <Button
                    text={`Generate Pokemon Team based on all Pokemon`}
                      onClickFunc={onGeneratePokemonTeam}
                      style={
                        addButtonStyleEnable ?
                        `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit cursor-auto text-xl`
                        :
                        `text-gray-200 bg-roseCustom p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit
                        hover:scale-110 cursor-pointer text-xl transform transition duration-500`
                        
                      }
                    />
                    <Button
                    text={`Generate Pokemon Team based on my Team`}
                      onClickFunc={onGeneratePokemonTeamFromMyPokemon}
                      style={
                        addButtonStyleEnable ?
                        `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit cursor-auto text-xl`
                        :
                        `text-gray-200 bg-green-900 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit
                        hover:scale-110 cursor-pointer text-xl transform transition duration-500`
                        
                      }
                    />
                </div>

                <PokemonAITeamList
                pokemonAndMessagesList={
                  pokemonAITeamState? pokemonAITeamState : {pokemonAITeam:[]}
                }
                getSelectedPokemonOnClick={() => {}}
                titleText="Best counter to Rival's team"
                />

              </div>
          
            
        </div>
    </>
  );
};

export default Home;
