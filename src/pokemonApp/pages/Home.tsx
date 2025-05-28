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
import useFetchRandomPokemonTeamData from "../hooks/useFetchRandomPokemonTeamData";


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
  const {fetchTeam,} = useFetchRandomPokemonTeamData(); // random generated pokemon team



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

  const generateRandomPokemonTeam = async() => {
    //remove all pokemon before generating new team
    pokemonTeamState?.forEach( pokemon => {handleRemovePokemon(pokemon)});

    const team = await fetchTeam(); // ← use return value
    team.forEach(handleNewPokemon); // ← call context function for each one
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
          className="bg-transparent overflow-visible h-svw w-full
           grid justify-items-center mt-10 animate__animated animate__fadeIn px-10"
        >

            <h1 className="lg:text-5xl sm:text-3xl md:text-3xl text-3xl text-center text-white mt-4 md:mx-10 sm:mx-10 ">
                Welcome to MyPokeStrat!
            </h1>
            <p className="lg:text-2xl sm:text-xl md:text-xl text-xl text-center text-white mt-4 mb-20 md:mx-10 sm:mx-10">
                Here you find the best pokemon team to defeat your rival.
            </p>



        </div>
          {/* Main container */}
        {/* <div className="flex justify-center items-center"> */}

          <div className="lg:flex lg:justify-between md:inline-block sm:inline-block px-10 mb-20 lg:px-20 xl:px-56">
  
            {/* Selected pokemon team container */}
            <div className="inline-block lg:w-[40%] md:w-full sm:w-full">

                  <div  className="flex justify-start">
                    <Button
                    text={`Add Pokemon`}
                      onClickFunc={onShowFormEmpty}
                      style={
                        addButtonStyleEnable ?
                        `text-gray-200 bg-roseCustom p-3 pl-4 pr-4 rounded-xl m-4 w-fit h-fit lg:text-md sm:text-lg md:text-lg
                        hover:scale-110 cursor-pointer transform transition duration-500`
                        :
                        `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 w-fit h-fit cursor-auto lg:text-md sm:text-lg md:text-lg`
                      }
                    />

                    <Button
                    text={`Random Team`}
                      onClickFunc={generateRandomPokemonTeam}
                      style={
                        `text-gray-200 bg-green-900 p-3 pl-4 pr-4 rounded-xl m-4 w-fit h-fit lg:text-md sm:text-lg md:text-lg
                        hover:scale-110 cursor-pointer transform transition duration-500`
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

            <h1 className="w-1/3 text-white text-6xl text-center justify-self-center self-center p-10
                        animate__animated animate__fadeInLeft">
              VS
            </h1>


            {/* Generated pokemon team container */}
            <div className="inline-block lg:w-[50%] md:w-[60%] sm:w-full">
              {/* div containing the buttons */}
              <div className="flex justify-between">

                  <Button
                  text={`Generate Pokemon Team based on all Pokemon`}
                    onClickFunc={onGeneratePokemonTeam}
                    style={
                      addButtonStyleEnable ?
                      `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit cursor-auto lg:text-md sm:text-lg md:text-lg`
                      :
                      `text-gray-200 bg-roseCustom p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit
                      hover:scale-110 cursor-pointer lg:text-md sm:text-lg md:text-lg transform transition duration-500`
                      
                    }
                  />
                  <Button
                  text={`Generate Pokemon Team based on my Team`}
                    onClickFunc={onGeneratePokemonTeamFromMyPokemon}
                    style={
                      addButtonStyleEnable ?
                      `text-gray-500 bg-gray-800 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit cursor-auto lg:text-md sm:text-lg md:text-lg`
                      :
                      `text-gray-200 bg-green-900 p-3 pl-4 pr-4 rounded-xl m-4 h-fit w-fit
                      hover:scale-110 cursor-pointer lg:text-md sm:text-lg md:text-lg transform transition duration-500`
                      
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
        {/* </div> */}
    </>
  );
};

export default Home;
