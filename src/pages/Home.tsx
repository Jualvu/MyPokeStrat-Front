import { useState } from "react";
import SelectPokemonCard from "../components/SelectPokemonCard";
import { Button } from "../components/shared/Button";
import { PokemonTeamList } from "../components/PokemonTeamList";
import { usePokemonTeams } from "../hooks/usePokemonTeams";


const Home = (): JSX.Element => {

  //states
  const [inputText, setInputText] = useState<string>('');
  // const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const [showPokemonSelectForm, setShowPokemonSelectForm] = useState<boolean>(false);
  const { pokemonTeam, handleNewPokemon, handleRemovePokemon, handleEditPokemon} = usePokemonTeams();


  const onInputChange = (newText: string) => {
    setInputText(newText);
  }


  return (
    <>
        {
          showPokemonSelectForm ?
            <SelectPokemonCard
            inputText={inputText}
            onChangeInputText={onInputChange}
            isShowForm={showPokemonSelectForm}
            onShowFormFunc={() => setShowPokemonSelectForm(!showPokemonSelectForm)}
            onAddPokemon={(pokemon) => handleNewPokemon(pokemon)}
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
                onClickFunc={() => {setShowPokemonSelectForm(!showPokemonSelectForm)}}
                style="text-gray-200 bg-roseCustom hover:bg- p-3 rounded-xl m-4 w-[150px]"
              />
              
              <div className="flex justify-evenly gap-[200px] mb-[200px]">
                {

                }
                <PokemonTeamList
                  pokemonList={pokemonTeam}
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


          {/* <div className="h-[20px] w-[200px]">


          </div> */}

          <footer className="h-[1px] w-[1px]">
            Copyrigth
          </footer>

        </div>
    </>
  );
};

export default Home;
