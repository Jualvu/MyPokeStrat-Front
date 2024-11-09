import { useEffect, useState } from "react";
import SelectPokemonCard from "../components/SelectPokemonCard";
import { Button } from "../components/shared/Button";
import { PokemonTeamList } from "../components/PokemonTeamList";
import { usePokemonTeams } from "../hooks/usePokemonTeams";
import Pokemon from "../types/PokemonType";
import { PokemonInTeam } from "../utils/pokemonReducer";
import { RemovePokemonCard } from "../components/RemovePokemonCard";


const Home = (): JSX.Element => {

  //states
  const [inputText, setInputText] = useState<string>('');
  const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);
  const [showPokemonRemoveForm, setShowPokemonRemoveForm] = useState<boolean>(false);
  const [addButtonEnable, setAddButtonEnable] = useState<boolean>(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInTeam>();
  const { pokemonTeam, handleNewPokemon, handleRemovePokemon} = usePokemonTeams();


  useEffect(() => {
    if( pokemonTeam && pokemonTeam?.length > 5){
      setAddButtonEnable(false);
    }else if( pokemonTeam && pokemonTeam?.length < 6){
      setAddButtonEnable(true);
    }
  }, [pokemonTeam])

  const onInputChange = (newText: string) => {
    setInputText(newText);
  }


  const onShowFormEmpty = () => {
    if( pokemonTeam && pokemonTeam?.length < 6){
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
    // handleRemovePokemon(pokemonInTeam);
  }

  const onAddPokemon = (pokemon: Pokemon) => {
    // uuid creates the pokemonInTeam object to send to the Reducer
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
          className="bg-transparent overflow-visible h-screen
          pb-28 grid-row justify-items-center mt-10 bg-ro"
        >

          <div className="grid justify-items-center mb-[80px]">
            <h1 className="text-5xl text-white mt-4">
                Welcome to PokeApp!
            </h1>

            <p className="text-2xl text-white mt-4">
                Here you find the best pokemon team to defeat your rival.
            </p>

          </div>

            <div>
              <Button
              text={`Add Pokemon`}
                onClickFunc={onShowFormEmpty}
                style={
                  addButtonEnable ?
                  `text-gray-200 bg-roseCustom p-3 rounded-xl m-4 w-[150px]
                  hover:scale-110`
                  :
                  `text-gray-500 bg-gray-800 p-3 rounded-xl m-4 w-[150px]`
                }
              />
              
              <div className="flex justify-evenly gap-[200px] mb-[200px]">
                {

                }
                <PokemonTeamList
                  pokemonList={pokemonTeam ? pokemonTeam : []}
                  getSelectedPokemonOnClick={onShowRemovePokemonForm}
                />

                <h1 className="text-white text-6xl justify-self-center self-center">
                  VS
                </h1>

                <div className="bg-indigo-950 w-[400px] h-[800px] 
                inline-block justify-items-center rounded-2xl">
                  <h1 className="text-white text-xl mt-[20px]">
                    Best team to fight
                  </h1>
                    

                </div>

                

              </div>
            </div>

          <footer className="h-[1px] w-[1px]">
            Copyrigth
          </footer>

        </div>
    </>
  );
};

export default Home;
